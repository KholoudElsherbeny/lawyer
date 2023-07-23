<template>
  <div class="py-14 px-4 md:px-6">
    <div class="app_section py-5">
      <div class="container">
        <div
          class="flex items-center mb-5 lg:mb-0 flex-row-reverse flex-wrap-reverse lg:flex-wrap"
        >
          <div class="w-full md:w-1/2">
            <h2
              class="font-bold text-5xl w-full mb-5 md:max-w-[480px] leading-[3.5rem]"
            >
              Clients are <span class="text-primary">Satisfied</span> to Work
              With Us
            </h2>
            <p class="text-text-dark w-full md:max-w-[450px]">
              Our exposure to the complexities in ambit of Intellectual Property
              Law gave us the impetus and spiration to diversify into other
              streams.
            </p>
            <div class="mt-8">
              <nuxt-link
                :to="localePath('/')"
                class="base-link hover:text-[#72809D]"
              >
                {{ $t("BUTTONS.exploreMore") }}
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
          <div class="w-full md:w-1/2">
            <img
              class="max-w-[480px] me-auto"
              src="~/assets/images/books.svg"
              alt="mobile image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.app_section {
  @apply rounded-[2rem] md:rounded-[3rem] bg-[url('~/assets/images/app_bg.svg')];

  .app_section__content {
  }
}
</style>
