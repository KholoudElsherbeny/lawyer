<template>
    <div class="services_page bg-white">
      <general-breadcrumb :items="items" />
      <div class="container">
        <div class="flex py-14 gap-10">
          <div class="blog_section_content lg:w-6/12 ">
            <img src="~/assets/dammyImages/terms.png" alt="terms" class="mb-4" >
            <nuxt-page/>
          </div>
          <div class="blogs_side_menu  lg:w-6/12">
            <div class="blog_side_section">
                <terms-use class="p-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script setup>
  const i18n = useI18n();
  const items = {
    title: i18n.t("NAV.termsOfUse"),
    links: [
      {
        path: "/",
        name: i18n.t("NAV.home"),
      },
      {
        path: "/terms",
        name: i18n.t("NAV.termsOfUse"),
      },
    ],
  };

</script>
  
  