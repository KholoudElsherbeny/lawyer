<template>
  <div class="py-14">
    <div class="py-4 bg-[#F5FBFF]">
      <div class="container">
        <div
          class="flex items-center mb-5 lg:mb-0 flex-wrap-reverse lg:flex-wrap "
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

            <div class="download_section mt-8">
              <h4 class="text-text-dark text-base mb-2">
                {{ $t("HEADERS.downloadApplication") }}:
              </h4>
              <div class="actions">
                <a href="/">
                  <img
                    src="~/assets/images/icons/about/google_play.svg"
                    alt="google_play_icon"
                  />
                </a>
                <a href="/">
                  <img
                    src="~/assets/images/icons/about/app_store.svg"
                    alt="app_store_icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <img src="~/assets/images/client.png" alt="client-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
