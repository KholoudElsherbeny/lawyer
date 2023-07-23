<template>
  <div class="base_section_wrapper py-14" v-if="sectionData">
    <div class="container">
      <div class="flex flex-wrap justify-center base_section_content">
        <div
          class="image_wrapper mb-8 md:mb-0 md:w-1/2"
          v-if="sectionData.image"
        >
          <figure>
            <img
              :src="sectionData.image"
              class="h-auto max-w-[480px] me-auto rounded-lg"
              alt="image"
            />
          </figure>
        </div>
        <div class="text_section_wrapper md:w-1/2">
          <div class="icon_wrapper" v-if="sectionData.icon">
            <img :src="sectionData.icon" width="20" height="20" alt="icon" />
          </div>
          <div class="main_title mb-3" v-html="sectionData.title"></div>
          <div class="main_description" v-html="sectionData.description"></div>
          <buttion v-if="sectionData.button" class="base-btn">
            {{ button }}
          </buttion>
          <nuxt-link
            v-if="route"
            :to="localePath(route)"
            class="base-link mt-8"
          >
            {{ $t("BUTTONS.readMore") }}
            <i
              class="pi"
              :class="
                $i18n.locale == 'en'
                  ? ' pi-arrow-up-left'
                  : ' pi-arrow-up-right'
              "
            ></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  sectionData: { required: true },
  button: { required: false },
  route: { required: false },
  index: { required: false },
});
</script>
<style lang="scss">
.base_section_wrapper {
  background: #fff;

  .base-link {
    &:hover {
      @apply text-[#72809D];
    }
  }
}
</style>
