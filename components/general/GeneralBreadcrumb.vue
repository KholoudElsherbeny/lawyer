<template>
  <div class="base_breadcrumb">
    <div class="container">
      <div class="text-center">
        <h1 class="text-primary font-bold text-5xl mb-5">
          {{ items.title }}
        </h1>
        <ul class="links">
          <li v-for="link in items.links" :key="link.name">
            <nuxt-link :to="localePath(link.path)">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    required: true,
  },
});
</script>

<style lang="scss">
.base_breadcrumb {
  @apply h-[450px] bg-cover flex flex-col items-center justify-center  bg-[url('~/assets/images/breadcrumb_bg.svg')];

  .links {
    @apply flex items-center  justify-center;
    li {
      @apply relative text-[#B1B8C0] text-2xl font-medium last:me-0;

      &:not(:last-child) {
        &::after {
          content: url("~/assets/images/icons/crumb.svg");
          @apply mx-3;
          display: inline-flex;
        }
      }
    }
  }
}
</style>
