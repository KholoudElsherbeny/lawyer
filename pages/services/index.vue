<template>
  <div class="services_page bg-white">
    <general-breadcrumb :items="items" />
    <!-- Start :: Services Section -->
    <nuxt-link :to="localePath('/services/criminalConsultation')">
      <GeneralBaseSection
      v-for="(service, index) in services"
      :key="service.id"
      :section-data="service"
      :index="index"
      :button="$t('BUTTONS.readMore')"
      :route="$t('BUTTONS.readMore')"
    />
    </nuxt-link>
  </div>
</template>
<script setup>
const i18n = useI18n();
const items = {
  title: i18n.t("NAV.services"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/services",
      name: i18n.t("NAV.services"),
    },
  ],
};
const services = [
  {
    id: 1,
    image: new URL(`@/assets/dammyImages/service1.png`, import.meta.url).href,
    icon: new URL(`@/assets/dammyImages/icon1.png`, import.meta.url).href,
    title: "<h2><span>criminal</span> Consultation</h2>",
    description:
      "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
  },
  {
    id: 2,
    image: new URL(`@/assets/dammyImages/service2.png`, import.meta.url).href,
    icon: new URL(`@/assets/dammyImages/icon2.png`, import.meta.url).href,
    title: "<h2><span>criminal</span> Consultation</h2>",
    description:
      "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
  },
  {
    id: 3,
    image: new URL(`@/assets/dammyImages/service3.png`, import.meta.url).href,
    icon: new URL(`@/assets/dammyImages/icon1.png`, import.meta.url).href,
    title: "<h2><span>criminal</span> Consultation</h2>",
    description:
      "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
  },
  {
    id: 4,
    image: new URL(`@/assets/dammyImages/service4.png`, import.meta.url).href,
    icon: new URL(`@/assets/dammyImages/icon2.png`, import.meta.url).href,
    title: "<p><span>criminal</span> Consultation</p>",
    description:
      "<p>The firm was established in 1990 in Kolkata, India as an Intellectual Property Law Firm.</p> <p>Our exposure to the complexities in ambit of Intellectual Property Law gave us the impetus and spiration to diversify into other streams.</p>",
  },
];
</script>

<style lang="scss">
.services_page {
  .base_section_wrapper {
    &:nth-child(even) {
      .base_section_content {
        @apply flex-row-reverse;
        .image_wrapper {
          img {
            @apply me-0 ms-auto;
          }
        }
      }
    }
    &:nth-child(odd) {
      @apply bg-[#F5FBFF];
    }
  }
}
</style>
