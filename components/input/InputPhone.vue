<template>
  <div>
    <VeeField :name="name" v-model="value" v-slot="{ field, meta }">
      <div
        class="phone_wrapper"
        @click.stop
        :class="{
          error: !meta.valid && meta.touched,
        }"
      >
        <label for="phone_nubmer" class="label">{{
          $t("labels.phoneNubmer")
        }}</label>
        <div class="phone_wrapper_content relative flex items-center">
          <div
            class="me-2 static cursor-pointer"
            @click="show = !show"
            v-if="country"
          >
            <p class="flex items-center font-medium">
              <img
                class="me-1"
                :key="country.id"
                :src="country.image"
                alt="flag"
                width="25"
                height="22"
              />
              +{{ country.phone_code }}
            </p>

            <div
              id="dropdown_menu"
              class="dropdown_menu z-30"
              :class="{ active: show }"
            >
              <div v-for="item in countries" :key="item.id">
                <ul class="">
                  <li
                    @click="selcetedCode(item)"
                    class="flex items-center ps-3 pe-1 py-3 cursor-pointer mx-1 border-b border-gray-200 hover:bg-gray-200"
                  >
                    <img
                      class="me-1"
                      :src="country.image"
                      alt="flag"
                      width="25"
                      height="20"
                    />
                    <span class="text-sm"> +{{ item.phone_code }} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="phone_input flex-1 border-s border-text-dark ps-2">
            <input
              class="appearance-none"
              v-bind="field"
              @click.stop="show = false"
              id="phone_nubmer"
              type="number"
              autocomplete="off"
              :placeholder="$t('labels.enterYourPhoneNumber')"
            />
          </div>
        </div>
      </div>
      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        style="color: red;"
        class="help is-danger"
      />
    </VeeField>
  </div>
</template>

<script setup>
const props = defineProps(["modelValue", "name", "label"]);
const emit = defineEmits(["code_change", "update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});

// import { useGeneralStore } from "@/stores/general";
// import { storeToRefs } from "pinia";
// const store = useGeneralStore();
// const { getCountries } = storeToRefs(store);
// store.setCountries();

const countries = ref(null);

const { data: res } = await useAPILazyFetch("general/countries", {
  method: "GET",
});

watch(res, (res) => {
  if (res) {
    countries.value = res.data;

    country.value = res.data[0];
    emit("code_change", country.value);
  }
});

const country = ref(null);

const show = ref(false);

onMounted(() => {
  document.addEventListener("click", function (event) {
    if (event.target.id !== `dropdown_menu`) {
      show.value = false;
    }
  });
});

function selcetedCode(item) {
  country.value = item;
  emit("code_change", item);
}
</script>

<style lang="scss">
.phone_wrapper {
  label {
    @apply text-text-dark text-sm block mb-2;
  }
  .phone_wrapper_content {
    @apply font-medium rounded-xl py-4 px-5 border  focus:border-primary;
    transition: border 0.3s ease-in;
    input {
      @apply focus:outline-none focus:shadow-none w-full caret-primary;
    }
    &:focus,
    &:focus-within {
      @apply border-primary;
      .phone_input {
        @apply border-primary;
      }
    }
    .dropdown_menu {
      @apply absolute bg-white top-full border  rounded-lg start-0 max-h-32 overflow-y-auto invisible opacity-0 -translate-y-10 transition-all duration-300;
      &.active {
        @apply visible opacity-100 translate-y-0;
      }
    }
  }

  &.error {
    .phone_wrapper_content {
      @apply border-red-500;
    }
    label {
      @apply text-red-500;
    }
    .phone_input {
      @apply border-red-500;
    }
  }
}
</style>
