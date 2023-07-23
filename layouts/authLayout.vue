<template>
  <div class="auth_layout min-h-[100vh] flex flex-wrap">
    <div class="w-full xl:w-1/2">
      <div class="container">
        <header class="xl:ps-11">
          <nav class="flex items-center justify-between py-8">
            <div class="logo">
              <nuxt-link :to="localePath('/')">
                <img src="~/assets/images/logo/logo.svg" alt="logo image" />
              </nuxt-link>
            </div>
            <div class="language">
              <nuxt-link
                class="flex items-center"
                :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
              >
                <img
                  class="me-2"
                  src="~/assets/images/icons/language.svg"
                  alt="lang icon"
                />
                <span class="font-meduim text-lg text-primary">
                  {{ $t(`locale.${$i18n.locale}`) }}
                </span>
              </nuxt-link>
            </div>
          </nav>
        </header>
        <section class="pt-4 xl:ps-11 xl:pt-11">
          <slot />
        </section>
      </div>
    </div>
    <div class="hidden image_bg xl:flex w-1/2"></div>
  </div>
</template>

<script setup>
const i18n = useI18n();
useHead({
  titleTemplate: `${i18n.t("appName")} | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Lawyer auth App Desc Will Go Here",
    },
  ],
});
</script>

<style lang="scss">
.auth_layout {
  .image_bg {
    background: url("~/assets/images/auth_bg.svg");
    background-size: cover;
    background-position: center center;
  }
}
</style>
