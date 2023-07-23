<template>
  <div>
    <VeeForm
      as="div"
      @submit="onSubmit"
      v-slot="{ meta }"
      :validation-schema="schema"
    >
      <form>
        <div
          class="input_wrapper_types mb-20 md:max-w-[90%] mx-auto"
          :class="!meta.valid && meta.touched ? 'error' : ''"
        >
          <h5 class="text-sm text-text-dark mb-2">
            {{ $t("labels.choose") }}
          </h5>
          <div class="flex flex-wrap justify-around">
            <VeeField
              name="auth_type"
              type="radio"
              value="client"
              v-slot="{ field }"
              v-model="user_type"
            >
              <div class="flex items-center justify-between flex-wrap">
                <div class="label">
                  <label
                    for="client_type"
                    class="cursor-pointer"
                    :class="{ checked: field.checked }"
                  >
                    <img
                      src="~/assets/images/icons/client_icon.svg"
                      alt="client_icon"
                    />
                    <span>{{ $t("labels.client") }}</span>
                  </label>

                  <input
                    @change="selectUserType('client')"
                    id="client_type"
                    v-bind="field"
                    type="radio"
                  />
                </div>
              </div>
            </VeeField>
            <VeeField
              name="auth_type"
              type="radio"
              value="lawyer"
              v-slot="{ field }"
              v-model="user_type"
            >
              <div class="flex items-center justify-between flex-wrap">
                <div class="label">
                  <label
                    for="lawyer_type"
                    class="cursor-pointer"
                    :class="{ checked: field.checked }"
                  >
                    <img
                      src="~/assets/images/icons/lawyer_icon.svg"
                      alt="lawyer_icon"
                    />
                    <span>{{ $t("labels.lawyer") }}</span>
                  </label>
                  <input
                    @change="selectUserType('lawyer')"
                    id="lawyer_type"
                    v-bind="field"
                    class="checked"
                    type="radio"
                  />
                </div>
              </div>
            </VeeField>
          </div>
          <VeeErrorMessage class="text-red-500 text-sm" name="auth_type" />
        </div>

        <nuxt-link
          :to="localePath('/auth/login')"
          :disabled="!meta.valid"
          class="base-btn w-full"
        >
          {{ $t("BUTTONS.next") }}
        </nuxt-link>
      </form>
    </VeeForm>

    <p
      class="mt-5 text-center text-secondary mb-0 font-sm font-medium"
      v-if="user_type == 'client'"
    >
      {{ $t("labels.dontHaveAnAccount") }}
      <nuxt-link :to="localePath('/auth/register')" class="text-primary ms-1">{{
        $t("BUTTONS.createAccount")
      }}</nuxt-link>
    </p>
  </div>
</template>
<script setup>
import * as yup from "yup";

const user_type = ref(null);

const schema = yup.object({
  auth_type: yup.string().required(),
});

function selectUserType(type) {
  const userType = useCookie("user_type");
  userType.value = type;
}

function onSubmit(values) {
  const userType = useCookie("user_type");
  userType.value = values.auth_type;

  console.log(userType.value);
}
</script>

<style lang="scss">
.input_wrapper_types {
  label {
    @apply flex justify-center rounded-2xl border   items-center flex-col w-72 mb-5 md:mb-0 md:w-56  py-11;
    span {
      @apply font-medium text-lg mt-6;
    }
    &.checked {
      @apply border-primary;
    }
  }
  input {
    display: none;
  }
}
</style>
