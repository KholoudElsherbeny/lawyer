<template>
  <div class="home_slider pt-44 pb-24 min-h-[85vh] flex items-center">
    <div class="container mx-auto">
      <div class="w-full md:w-1/2">
        <h1 class="title text-white text-2xl xl:text-7xl md:text-3xl">
          Expert <span class="text-primary">Advisory legal </span> Service
        </h1>

        <p class="desc text-white text-xl mt-4">
          The firm was established in 1990 in Kolkata, India as an Intellectual
          Property Law Firm.
        </p>

        <div class="actions mt-11">
          <nuxt-link class="base-btn" :to="localePath('/')">
            {{ $t("NAV.contactUs") }}
          </nuxt-link>
          <nuxt-link class="base-link" :to="localePath('/')">
            {{ $t("BUTTONS.seeMore") }}

            <i
              class="pi"
              :class="
                $i18n.locale == 'en'
                  ? ' pi-arrow-up-right'
                  : ' pi-arrow-up-left'
              "
            ></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home_slider {
  background: url("~/assets/images/slider.svg");
  background-size: cover;
}
</style>
