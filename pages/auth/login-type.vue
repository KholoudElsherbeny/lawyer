<template>
  <div class="auth_login pt-11 xl:pt-0">
    <form @submit.prevent class="w-full md:max-w-xl mx-auto xl:mx-0">
      <h1 class="text-4xl md:text-5xl capitalize font-bold mb-11">
        <span class="text-4xl leading-9">
          {{ $t("HEADERS.hello") }}
        </span>
        <br />
        {{ $t("HEADERS.welcomeBack") }}
      </h1>

      <div class="login_type">
        <auth-select-type />
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
