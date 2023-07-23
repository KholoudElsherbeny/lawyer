<template>
    <div class="services_page bg-white">
      <general-breadcrumb :items="items" />
      <services-head/>
      <div class="container">
        <div class="flex py-14 gap-6">
          <div class="blog_section_content lg:w-8/12">
            <img src="~/assets/dammyImages/service5.png" alt="services" class="mb-4" >
            <div class="grid md:grid-cols-1 " >
              <div>
                <services-content class="mt-0 mb-5" />
              </div>
            </div>
            <nuxt-page/>
          </div>
          <div class="blogs_side_menu hidden lg:block w-4/12">
            <div class="blog_side_section">
              <services-side />
            </div>
            <div class="blog_side_section">
              <services-build />
            </div>
          </div>
        </div>
      </div>
      <services-faq />
    </div>
  </template>
  <script setup>
  const i18n = useI18n();
  const items = {
    title: i18n.t("NAV.Criminal Consultation"),
    links: [
      {
        path: "/",
        name: i18n.t("NAV.home"),
      },
      {
        path: "/services",
        name: i18n.t("NAV.services"),
      },
      {
        path: "/criminalConsultation",
        name: i18n.t("NAV.Criminal Consultation"),
      },
    ],
  };

  </script>
  
  <style lang="scss">
  .services_page {
    .icon_wrapper{

    }
  }
  </style>
  