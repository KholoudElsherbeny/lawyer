<template>
  <div>
    <Header  />
    <div class="app_wrapper bg-secondary" id="app_wrapper">
      <slot />
    </div>
    <Footer />
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
      content: "Lawyer App Desc Will Go Here",
    },
  ],
});

// if (process.client) {
//   let header = document.getElementById("header");
//   let footer = document.getElementById("footer");
//   let app_wrapper = document.getElementById("app_wrapper");

//   let header_height = header.clientHeight;
//   let footer_height = footer.clientHeight;

//   app_wrapper.style.minHeight = `calc(100vh - ${
//     header_height + footer_height
//   }px)`;
// }
</script>

<style></style>
