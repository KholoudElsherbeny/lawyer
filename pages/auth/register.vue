<template>
  <div class="auth_login">
    <form @submit.prevent class="w-full md:max-w-xl md:mx-auto xl:mx-0">
      <h1 class="mb-4 xl:mb-8 w-full">
        <span class="text-4xl xl:text-5xl capitalize font-bold leading-9">
          {{ $t("HEADERS.gettingStarted") }}
        </span>

        <span class="text-base text-text-dark mt-3 block lg:max-w-[70%]">
          {{
            $t(
              "HEADERS.lookLikeYouAreNewToUsCreateAnAccountForACompleteExperience"
            )
          }}
        </span>
      </h1>

      <div class="register_form pb-11">
        <div>
          <VeeForm
            as="div"
            @submit="onSubmit"
            v-slot="{ meta }"
            :validation-schema="schema"
          >
            <form>
              <VeeField
                name="name"
                type="text"
                v-slot="{ meta, field }"
                v-model="register_Form.name"
              >
                <div
                  class="input_wrapper"
                  :class="!meta.valid && meta.touched ? 'error' : ''"
                >
                  <label for="name">{{ $t("labels.name") }}</label>
                  <input
                    id="name"
                    name="name"
                    v-bind="field"
                    :placeholder="$t('labels.enterYourName')"
                  />
                  <VeeErrorMessage class="text-red-500 text-sm" name="name" />
                </div>
              </VeeField>

              <VeeField
                name="email"
                type="email"
                v-model="register_Form.email"
                v-slot="{ meta, field }"
              >
                <div
                  class="input_wrapper"
                  :class="!meta.valid && meta.touched ? 'error' : ''"
                >
                  <label for="email">{{ $t("labels.email") }}</label>
                  <input
                    id="email"
                    name="email"
                    v-bind="field"
                    :placeholder="$t('labels.enterYourEmail')"
                  />
                  <VeeErrorMessage class="text-red-500 text-sm" name="email" />
                </div>
              </VeeField>

              <div class="mb-2">
                <input-phone
                  @code_change="updateCode($event)"
                  name="phone"
                  v-model="register_Form.phone"
                />
              </div>
              <div class="mb-2">
                <input-password
                  name="password"
                  v-model="register_Form.password"
                />
              </div>
              <div class="mb-2">
                <input-password
                  :placeholder="$t('labels.enterTheConfirmationPassword')"
                  name="confirmPassword"
                  v-model="register_Form.confirmPassword"
                />
              </div>

              <button
                type="submit"
                :disabled="!meta.valid"
                class="base-btn w-full mt-11"
              >
                {{ $t("BUTTONS.createNewAccount") }}
              </button>
            </form>
          </VeeForm>

          <p class="mt-5 text-center text-secondary mb-0 font-sm">
            {{ $t("labels.haveAnAccount") }}
            <nuxt-link
              :to="localePath('/auth/login')"
              class="text-primary ms-1 font-medium"
              >{{ $t("BUTTONS.login") }}</nuxt-link
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import * as yup from "yup";
import { configure } from "vee-validate";
const i18n = useI18n();
definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
});
useHead({
  title: i18n.t("NAV.newAccount"),
});

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const router = useRouter();
const config = useRuntimeConfig();

const toast = useToast();

const localePath = useLocalePath();
const register_Form = reactive({
  name: null,
  email: null,
  phone: null,
  phone_code: null,
  password: null,
  confirmPassword: null,
});

const phoneLimit = ref(null);

function updateCode(code) {
  register_Form.phone_code = code.phone_code;
  phoneLimit.value = code.phone_number_limit;
}
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], i18n.t("labels.passwordDontMatch"))
    .label(i18n.t("labels.confirmPasswordIsARequired")),
});

async function onSubmit() {
  const frmData = new FormData();
  frmData.append("full_name", register_Form.name);
  frmData.append("email", register_Form.email);
  frmData.append("password", register_Form.password);
  frmData.append("password_confirmation", register_Form.confirmPassword);
  frmData.append("phone", register_Form.phone);
  frmData.append("phone_code", register_Form.phone_code);

  const phoneToVerify = useCookie("phoneToVerify", {
    maxAge: 30 * 60,
  });

  try {
    await $fetch(`${config.public.baseURL}client_web/register`, {
      method: "POST",
      body: frmData,
      headers: {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value,
      },
    });

    phoneToVerify.value = {
      phone: register_Form.phone,
      phone_code: register_Form.phone_code,
      type: "new",
    };

    router.push(localePath("/auth/verify"));
  } catch (err) {
    toast.error(err.response._data.message);
  }
}
</script>
