<template>
  <div class="auth_login">
    <form @submit.prevent class="w-full md:max-w-xl mx-auto xl:mx-0">
      <h1 class="mb-3">
        <span class="text-5xl capitalize font-bold leading-9 block">
          {{ $t("HEADERS.verificationCode") }}
        </span>
      </h1>
      <p class="max-w-[60%] inline-block mt-3 mb-4">
        <span class="text-base text-text-dark me-1">
          {{ $t("HEADERS.enterTheVerification") }}
        </span>

        <span class="font-bold text-secondary" v-if="phoneNumber">{{
          "+" + phoneNumber.phone_code + " " + phoneNumber.phone
        }}</span>
      </p>

      <h3 class="flex items-center font-medium text-primary mb-8">
        <!-- <nuxt-icon name="edit"></nuxt-icon> -->
        <img
          src="~/assets/images/icons/icon_edit.svg"
          alt="edit icon"
          class="me-2"
        />
        <span>
          {{ $t("HEADERS.editPhoneNumber") }}
        </span>
      </h3>

      <div class="register_form">
        <div>
          <VeeForm as="div" @submit="onSubmit">
            <form>
              <div
                class="input_wrapper otp_inputs justify-between max-w-[80%] mx-auto"
                :class="!validation.valid && validation.touched ? 'error' : ''"
              >
                <v-otp-input
                  ref="otpInput"
                  input-classes="otp-input"
                  separator=" "
                  v-model="verify_code"
                  :num-inputs="4"
                  :should-auto-focus="true"
                  input-type="letter-numeric"
                  @on-change="handleOnChange"
                  @on-complete="handleOnComplete"
                />
                <p class="text-red-500 text-sm mb-0"></p>
              </div>

              <button
                type="submit"
                :disabled="!validation.valid"
                class="base-btn w-full mt-11"
              >
                {{ $t("BUTTONS.send") }}
              </button>
            </form>
            <div class="flex justify-around items-center mt-9">
              <div class="flex items-center">
                <p class="mb-0 me-1">
                  {{ $t("HEADERS.ifYouDontReceiveCode") }}
                </p>
                <button
                  :disabled="seconds != 0 || minutes != 0"
                  class="text-primary font-medium"
                >
                  {{ $t("BUTTONS.resend") }}
                </button>
              </div>
              <span class="text-primary font-medium">
                <bdi>00:{{ seconds < 10 ? "0" : "" }}{{ seconds }}</bdi>
              </span>
            </div>
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
        <h4>{{ $t("HEADERS.loggedInSuccessfully") }}</h4>
      </general-notify>
    </Teleport>
  </div>
</template>

<script setup>
import VOtpInput from "vue3-otp-input";
import { useToast } from "vue-toastification";
const i18n = useI18n();
const config = useRuntimeConfig();
const verify_code = ref("");
const router = useRouter();
const localePath = useLocalePath();
const phoneNumber = useCookie("phoneToVerify");
const toast = useToast();
const validation = reactive({
  valid: false,
  touched: false,
});

function handleOnComplete(event) {
  validation.touched = false;
  validation.valid = true;

  verify_code.value = event;
}
function handleOnChange() {
  validation.touched = true;
  validation.valid = false;
}

const seconds = ref(59);
const minutes = ref(0);
const emit = defineEmits(["change-step"]);
function countDown() {
  let secondsInterval = setInterval(() => {
    seconds.value--;
    if (seconds.value <= 0) {
      clearTimeout(secondsInterval);
      if (minutes.value == 0) return;
    }
  }, 1000);
}

countDown();

definePageMeta({
  layout: "auth-layout",
  middleware: "verify-phone",
});

const loggedInSuccess = ref(false);
const message = ref(null);

async function onSubmit() {
  const frmData = new FormData();
  frmData.append("code", verify_code.value);

  frmData.append("phone", phoneNumber.value.phone);
  frmData.append("phone_code", phoneNumber.value.phone_code);

  let url = "";
  if (phoneNumber.value.type == "new") {
    url = "verify_Phone";
  } else if (phoneNumber.value.type == "reset") {
    url = "check_code";
  }

  try {
    const res = await $fetch(`${config.public.baseURL}client_web/${url}`, {
      method: "POST",
      body: frmData,
    });

    if (phoneNumber.value.type == "new") {
      message.value = res.message;
      loggedInSuccess.value = true;

      setTimeout(() => {
        loggedInSuccess.value = false;
        message.value = "";
      }, 3000);

      phoneNumber.value = null;
      useCookie("session-token").value = res.data.token;
      router.push(localePath(`/`));
    } else {
      router.push(localePath(`/auth/change-password`));
      useCookie("verify_code", {
        maxAge: 30 * 60,
      }).value = verify_code.value;
    }
  } catch (err) {
    toast.error(err.response._data.message);
  }
  // verify_code.value = verify_code;
  validation.touched = false;
  validation.valid = true;
}

useHead({
  title: i18n.t("NAV.login"),
});
</script>
