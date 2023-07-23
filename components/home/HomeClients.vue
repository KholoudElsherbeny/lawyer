<template>
  <div class="base_section_wrapper py-14">
    <div class="flex flex-wrap justify-center">
      <div class="text_section_wrapper ps-4 md:w-1/2">
        <h2 class="font-bold text-5xl w-full md:max-w-[480px] leading-[3.5rem]">
          Clients are <span class="text-primary">Satisfied</span> to Work With
          Us
        </h2>
        <p class="text-text-dark w-full md:max-w-[450px]">
          Our exposure to the complexities in ambit of Intellectual Property Law
          gave us the impetus and spiration to diversify into other streams.
        </p>

        <nuxt-link :to="localePath('/')" class="base-link mt-8">
          {{ $t("BUTTONS.scheduleAnAppointment") }}
          <i
            class="pi"
            :class="
              $i18n.locale == 'en' ? ' pi-arrow-up-left' : ' pi-arrow-up-right'
            "
          ></i>
        </nuxt-link>
      </div>
      <div class="image_wrapper mb-8 md:mb-0 md:w-1/2">
        <figure>
          <img
            width="470"
            src="~/assets/dammyImages/service1.png"
            class="h-auto ms-auto rounded-lg"
            alt="image"
          />
        </figure>
      </div>
    </div>
  </div>
</template>
<script setup></script>
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
