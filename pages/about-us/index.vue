<template>
  <div class="about_page bg-white">
    <general-breadcrumb :items="items" />
    <GeneralBaseSection :section-data="service" />
    
    <div class="container">
      <div class="about_features pt-14 pb-16">
        <div
          class="about_features_content grid md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          <about-features
            :item="feature"
            v-for="feature in features"
            :key="feature.id"
          />
        </div>
      </div>
    </div>
    <about-app-section />
    <about-client-section />
  </div>
</template>

<script setup>
const i18n = useI18n();
const items = {
  title: i18n.t("NAV.aboutUs"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/about-us",
      name: i18n.t("NAV.aboutUs"),
    },
  ],
};
const service = {
  id: 1,
  image: new URL(`~/assets/dammyImages/service1.png`, import.meta.url).href,
  title: "<h2><span>Law Solutions</span> to solve your problems</h2>",
  description:
    "<p class='mb-5'>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
};
const features = [
  {
    id: 1,
    image: new URL(`~/assets/images/icons/about/1.svg`, import.meta.url).href,
    title: "Our Philosophy",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 2,
    image: new URL(`~/assets/images/icons/about/2.svg`, import.meta.url).href,
    title: "Our Principle",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: 3,
    image: new URL(`~/assets/images/icons/about/3.svg`, import.meta.url).href,
    title: "Key of Sucess",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
];
</script>

<style></style>
