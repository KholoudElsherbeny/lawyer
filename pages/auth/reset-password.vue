<template>
  <div class="auth_login">
    <form @submit.prevent class="w-full md:max-w-xl mx-auto xl:mx-0">
      <nuxt-link
        :to="localePath('/auth/login')"
        class="text-lg text-text-dark mb-5 block font-medium"
      >
        <i
          class="pi text-base me-1"
          :class="$i18n.locale == 'ar' ? 'pi-arrow-right' : 'pi-arrow-left'"
        ></i>
        {{ $t("BUTTONS.back") }}
      </nuxt-link>
      <h1 class="mb-3">
        <span class="text-5xl capitalize font-bold leading-9 block">
          {{ $t("HEADERS.resetPassword") }}
        </span>
      </h1>
      <p class="max-w-[70%] inline-block mt-3 mb-4">
        <span class="text-base text-text-dark me-1">
          {{
            $t("HEADERS.pleaseEnterYourPhoneNumberBelowToRecoveryYourPassword")
          }}
        </span>
      </p>

      <div class="reset_form mt-11">
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
                v-model="reset_form.phone"
              />
            </div>

            <button
              type="submit"
              :disabled="!meta.valid"
              class="base-btn w-full mt-11"
            >
              {{ $t("BUTTONS.send") }}
            </button>
          </form>
        </VeeForm>
      </div>
    </form>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { useToast } from "vue-toastification";
import { configure } from "vee-validate";
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
definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
});
useHead({
  title: i18n.t("NAV.resetPassword"),
});

const localePath = useLocalePath();
const reset_form = reactive({
  phone: null,
  phone_code: null,
});

const phoneLimit = ref(null);

function updateCode(code) {
  reset_form.phone_code = code.phone_code;
  phoneLimit.value = code.phone_number_limit;
}
const schema = yup.object({
  phone: yup.number().required(),
});

async function onSubmit() {
  const frmData = new FormData();
  frmData.append("phone", reset_form.phone);
  frmData.append("phone_code", reset_form.phone_code);
  const phoneToVerify = useCookie("phoneToVerify", {
    maxAge: 30 * 60,
  });

  try {
    await $fetch(
      `${config.public.baseURL}${useCookie("user_type").value}_web/send_code`,
      {
        method: "POST",
        body: frmData,
        headers: {
          Accept: "application/json",
          lang: i18n.locale.value,
          "Accept-Language": i18n.locale.value,
        },
      }
    );

    // console.log(data);

    phoneToVerify.value = {
      phone: reset_form.phone,
      phone_code: reset_form.phone_code,
      type: "reset",
    };

    router.push(localePath("/auth/verify"));
  } catch (err) {
    toast.error(err.response._data.message);
  }
}
</script>
