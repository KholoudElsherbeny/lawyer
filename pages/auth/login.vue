<template>
  <div class="auth_login">
    <form @submit.prevent class="w-full md:max-w-xl mx-auto xl:mx-0">
      <nuxt-link
        :to="localePath('/auth/login-type')"
        class="text-lg text-text-dark mb-5 block font-medium"
      >
        <i
          class="pi text-base me-1"
          :class="$i18n.locale == 'ar' ? 'pi-arrow-right' : 'pi-arrow-left'"
        ></i>
        {{ $t("BUTTONS.back") }}
      </nuxt-link>
      <h1 class="text-4xl md:text-5xl capitalize font-bold mb-11">
        <span class="text-4xl leading-9">
          {{ $t("HEADERS.hello") }}
        </span>
        <br />
        {{ $t("HEADERS.welcomeBack") }}
      </h1>

      <div class="login_type">
        <auth-login />
      </div>
    </form>
  </div>
</template>

<script setup>
const i18n = useI18n();
definePageMeta({
  layout: "auth-layout",
  middleware: "guest",
});

useHead({
  title: i18n.t("NAV.login"),
});
</script>
