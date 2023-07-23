<template>
  <div class="login_form">
    <div class="xl:max-w-2xl">
      <VeeForm
        as="div"
        @submit="onSubmit"
        v-slot="{ meta }"
        :validation-schema="schema"
      >
        <form>
          <div class="mb-2">
            <input-phone
              @code_change="updateCode($event)"
              name="phone"
              v-model="login_Form.phone"
            />
          </div>
          <div class="mb-2">
            <input-password name="password" v-model="login_Form.password" />
          </div>
          <nuxt-link
            :to="localePath('/auth/reset-password')"
            class="mt-3 text-end block pe-2 text-primary mb-0 font-medium"
          >
            {{ $t("labels.forgetYourPassword") }}
          </nuxt-link>
          <button
            type="submit"
            :disabled="!meta.valid"
            class="base-btn w-full mt-11"
          >
            {{ $t("BUTTONS.login") }}
          </button>
        </form>
      </VeeForm>

      <p class="mt-5 text-center text-secondary mb-0 font-sm">
        {{ $t("labels.dontHaveAnAccount") }}
        <nuxt-link
          :to="localePath('/auth/register')"
          class="text-primary ms-1 font-medium"
          >{{ $t("BUTTONS.createAccount") }}</nuxt-link
        >
      </p>
    </div>
    <Teleport to="body">
      <general-notify v-show="loggedInSuccess">
        <img
          class="icon"
          src="@/assets/images/icons/success.svg"
          alt="success icon"
        />
        <h4>{{ $t("HEADERS.loggedInSuccessfully") }}</h4>
      </general-notify>
    </Teleport>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import * as yup from "yup";
import { configure } from "vee-validate";
import { useGlobalStore } from "~/stores/global";

const store = useGlobalStore();
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const router = useRouter();
const config = useRuntimeConfig();
const i18n = useI18n();

const toast = useToast();
const loggedInSuccess = ref(false);
const localePath = useLocalePath();
const login_Form = reactive({
  phone: null,
  phone_code: null,
  password: null,
});

const phoneLimit = ref(null);

function updateCode(code) {
  login_Form.phone_code = code.phone_code;
  phoneLimit.value = code.phone_number_limit;
}
const schema = yup.object({
  phone: yup.number().required(),
  password: yup.string().required(),
});

async function onSubmit() {
  const frmData = new FormData();
  frmData.append("password", login_Form.password);
  frmData.append("phone", login_Form.phone);
  frmData.append("phone_code", login_Form.phone_code);
  const phoneToVerify = useCookie("phoneToVerify", {
    maxAge: 30 * 60,
  });

  try {
    const data = await $fetch(`${config.public.baseURL}client_web/login`, {
      method: "POST",
      body: frmData,
      headers: {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value,
      },
    });

    if (!data.data.is_active) {
      toast.info(data.message);
      phoneToVerify.value = {
        phone: login_Form.phone,
        phone_code: login_Form.phone_code,
        type: "new",
      };
      router.push(localePath("/auth/verify"));
    } else {
      useCookie("session-token").value = data.data.token;
      store.fetchProfile();
      router.push(localePath("/"));
    }
  } catch (err) {
    toast.error(err.response._data.message);
  }
}
</script>

<style></style>
