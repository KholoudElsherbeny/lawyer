<template>
    <div class="auth_login bg-white rounded-lg mx-10">
      <form @submit.prevent class=" p-8">
        <div class="register_form ">
          <div>
            <VeeForm
              as="div"
              @submit="onSubmit"
              
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

                <VeeField
                  name="message"
                  type="text"
                  v-slot="{ meta, field }"
                  v-model="register_Form.message"
                >
                  <div
                    class="input_wrapper"
                    :class="!meta.valid && meta.touched ? 'error' : ''"
                  >
                    <label for="message">{{ $t("labels.message") }}</label>
                    <textarea
                      id="message"
                      name="message"
                      v-bind="field"
                      :placeholder="$t('labels.yourMessage')"
                    />
                    <VeeErrorMessage class="text-red-500 text-sm" name="message" />
                  </div>
                </VeeField>
                <button
                  type="submit"
                  
                  class="base-btn w-50 mt-11 m-auto"
                >
                  {{ $t("BUTTONS.send") }}
                </button>
              </form>
            </VeeForm>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import Textarea from 'primevue/textarea';
  import { useToast } from "vue-toastification";
  import * as yup from "yup";
  import { configure } from "vee-validate";
  const i18n = useI18n();
  definePageMeta({
    layout: "auth-layout",
    middleware: "guest",
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
    message: null
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
    message: yup.string().required(),
  });
  
  async function onSubmit() {
    const frmData = new FormData();
    frmData.append("full_name", register_Form.name);
    frmData.append("email", register_Form.email);
    frmData.append("phone", register_Form.phone);
    frmData.append("phone_code", register_Form.phone_code);
    frmData.append("message", register_Form.message);
  
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
  