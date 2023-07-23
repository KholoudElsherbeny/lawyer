<template>
  <div class="py-14 px-4 md:px-6">
    <div class="app_section py-5">
      <div class="container">
        <div
          class="app_section_content flex items-center mb-5 lg:mb-0 flex-wrap-reverse lg:flex-wrap"
        >
          <div class="app_section__content w-full md:w-1/2">
            <h2 class="title text-white font-bold pb-16">
              <span>Download</span> Mobile Application
            </h2>

            <div class="download_section">
              <h4 class="text-text-dark text-base mb-2">
                {{ $t("HEADERS.downloadApplication") }}:
              </h4>
              <div class="actions">
                <a href="/">
                  <img
                    src="~/assets/images/google_play.svg"
                    alt="google_play_icon"
                  />
                </a>
                <a href="/">
                  <img
                    src="~/assets/images/app_store.svg"
                    alt="app_store_icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="img_wrapper w-full md:w-1/2">
            <img src="~/assets/images/mobile.svg" alt="mobile image" />
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
