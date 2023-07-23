<template>
  <div class="auth_login">
    <form @submit.prevent class="w-full md:max-w-xl mx-auto xl:mx-0">
      <h1 class="mb-8 w-full">
        <span class="text-5xl capitalize font-bold leading-9">
          {{ $t("HEADERS.changePassword") }}
        </span>
      </h1>

      <div class="change_form">
        <div>
          <VeeForm
            as="div"
            @submit="onSubmit"
            v-slot="{ meta }"
            :validation-schema="schema"
          >
            <form>
              <div class="mb-4">
                <input-password
                  name="newPassword"
                  v-model="change_form.newPassword"
                />
              </div>
              <div class="mb-2">
                <input-password
                  :placeholder="$t('labels.enterTheConfirmationPassword')"
                  name="confirmNewPassword"
                  v-model="change_form.confirmNewPassword"
                />
              </div>

              <button
                type="submit"
                :disabled="!meta.valid"
                class="base-btn w-full mt-11"
              >
                {{ $t("BUTTONS.change") }}
              </button>
            </form>
          </VeeForm>
        </div>
      </div>
    </form>
    <Teleport to="body">
      <general-notify v-show="loggedInSuccess">
        <img
          class="icon"
          src="@/assets/images/icons/success.svg"
          alt="success icon"
        />
        <h4>{{ $t("HEADERS.passwordChangeSuccessfully") }}</h4>
        <p>
          {{
            $t(
              "HEADERS.getHelpToWriteAwillMakeAPowerOfAttorneyPrepareAhealthcare"
            )
          }}
        </p>
        <nuxt-link
          @click="loggedInSuccess = false"
          :to="localePath('/auth/login')"
          class="base-btn w-full mt-8"
          >{{ $t("BUTTONS.login") }}</nuxt-link
        >
      </general-notify>
    </Teleport>
  </div>
</template>

<script setup>
import * as yup from "yup";
import { configure } from "vee-validate";
const i18n = useI18n();
definePageMeta({
  layout: "auth-layout",
  middleware: "verify-phone",
});
useHead({
  title: i18n.t("NAV.changePassword"),
});

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const config = useRuntimeConfig();

const change_form = reactive({
  newPassword: null,
  confirmNewPassword: null,
});

const schema = yup.object({
  newPassword: yup.string().required(),
  confirmNewPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("newPassword")], i18n.t("labels.passwordDontMatch"))
    .label(i18n.t("labels.confirmPasswordIsARequired")),
});

const loggedInSuccess = ref(false);

async function onSubmit() {
  const dataVerify = useCookie("phoneToVerify");

  const frmData = new FormData();

  frmData.append("password", change_form.newPassword);
  frmData.append("password_confirmation", change_form.confirmNewPassword);
  frmData.append("phone", dataVerify.value.phone);
  frmData.append("phone_code", dataVerify.value.phone_code);
  frmData.append("code", useCookie("verify_code").value);

  const phoneToVerify = useCookie("phoneToVerify");

  try {
    await $fetch(
      `${config.public.baseURL}${
        useCookie("user_type").value
      }_web/reset_password`,
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

    phoneToVerify.value = null;
    loggedInSuccess.value = true;
    useCookie("verify_code").value = null;
  } catch (err) {
    toast.error(err.response._data.message);
  }
}
</script>
