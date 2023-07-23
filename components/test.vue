<template>
  <div>
    <h1>vee-validate cross-field Validation</h1>

    <VeeForm @submit="onSubmit" :validation-schema="schema">
      <p>
        These inputs use `yup` to perVeeForm validation. The confirmation field
        makes use of <strong>`yup.string.oneOf`</strong> rule with
        <strong>`Yup.ref`</strong> to target another field's value.
      </p>

      <div>
        <label for="password">Password</label>
        <VeeField id="password" name="password" type="password" />
        <ErrorMessage name="password" />
      </div>

      <div>
        <label for="passwordConfirmation">Confirm Password </label>
        <VeeField
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
        />
        <VeeErrorMessage name="passwordConfirmation" />
      </div>

      <button type="submit">Submit</button>
    </VeeForm>
    <!-- <VeeField
          name="name"
          type="text"
          v-slot="{ field, meta }"
          v-model="name"
        >
          <div
            class="input_wrapper"
            :class="!meta.valid && meta.touched ? 'error' : ''"
          >
            <label for="name">{{ $t("labels.name") }}</label>

            <input name="user_type" v-bind="field" type="text" />

            <VeeErrorMessage
              v-if="!meta.valid && meta.touched"
              name="name"
              as="div"
              class="text-red-500"
            />
          </div>
        </VeeField>

        <input-password v-model="password" name="password" />
        <input-phone class="mt-2" v-model="phone" name="phone" /> -->
  </div>
</template>
<script setup>
import { defineRule } from "vee-validate";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup.string().min(5).required(),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>
