<template>
  <div>
    <VeeField v-model="value" :name="name" v-slot="{ field, meta }">
      <div
        class="input_wrapper"
        :class="{
          error: !meta.valid && meta.touched,
        }"
      >
        <label
          :for="label"
          class="label"
          :class="value ? 'label_active' : ''"
          >{{ label ? $t(`labels.${label}`) : $t(`labels.${name}`) }}</label
        >
        <div class="relative">
          <input
            v-bind="field"
            autocomplete="off"
            :placeholder="
              placeholder ? placeholder : $t('labels.enterYourPassword')
            "
            :type="!showPassword ? 'password' : 'text'"
          />

          <span
            class="far absolute top-1/2 end-3 -translate-y-1/2"
            :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
            @click.stop="showPassword = !showPassword"
          >
          </span>
        </div>
      </div>

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-red-500"
      />
    </VeeField>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "name", "label", "placeholder"],
  emits: ["update:modelValue"],
  data() {
    return {
      showPassword: false,
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style lang="scss">
// .input_wrapper {
//   position: relative;
//   border: 2px solid $borderClr;
//   border-radius: 5px;
//   input {
//     background: inherit;
//     border: none;
//     padding: 1rem;
//     outline: none;
//     margin-top: 10px;
//     width: 100%;
//   }

//   .label {
//     position: absolute;
//     top: 50%;
//     left: 1rem;
//     transform: translateY(-50%);
//     color: gray;
//     transition: all 0.3s;
//   }
//   input:focus + .label,
//   .label_active {
//     top: 20%;
//   }
//   .password_icon {
//     position: absolute;
//     top: 50%;
//     right: 1rem;
//     transform: translateY(-50%);
//     color: gray;
//     font-size: 1.3rem;
//     cursor: pointer;
//   }
//   &.is-danger {
//     border-color: red;
//   }
//   @media screen and (max-width: 1200px) {
//     border-color: rgb(80, 75, 75);
//     .label {
//       color: rgb(180, 173, 173);
//     }
//   }
// }
</style>
