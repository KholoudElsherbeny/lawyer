<template>
  <div class="home_body rounded-[2rem] -translate-y-8 bg-white">
    <div class="home_content py-11">
      <GeneralBaseSection
        :section-data="service"
        :button="$t('BUTTONS.readMore')"
        route="/"
      />
      <div class="container">
        <home-stats />
        <home-solutions />
        <home-clients />
        <home-connect-lawyer />
      </div>
    </div>
  </div>
</template>

<script setup>
const service = {
  id: 1,
  image: new URL(`~/assets/dammyImages/service1.png`, import.meta.url).href,
  title: "<h2><span>Law Solutions</span> to solve your problems</h2>",
  description:
    "<p class='mb-5'>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
};
</script>

<style></style>
