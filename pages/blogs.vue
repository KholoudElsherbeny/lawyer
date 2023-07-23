<template>
  <div class="blogs_page bg-white">
    <general-breadcrumb :items="items" />

    <div class="container">
      <div class="flex py-14 gap-6">
        <div class="blog_section_content lg:w-8/12">
          <p class="mb-4 text-secondary">30 Blog</p>

          <div class="grid md:grid-cols-2 gap-4" v-if="!$route.params.slug">
            <div class="" v-for="n in 6" :key="n">
              <blog-card class="mt-0 mb-5"/>
            </div>
          </div>
          <nuxt-page/>
        </div>
        <div class="blogs_side_menu hidden lg:block w-4/12">
     
          <div class="blog_side_section">
            <h3>Categories</h3>
            <ul class="pt-5 pb-3">
              <li v-for="n in 5" :key="n" class="mb-3 last:mb-0">
                <div class="flex items-center">
                  <div class="flex items-center flex-1">
                    <input
                      :id="`checkbox-${n}`"
                      type="checkbox"
                      value="Administrative Blogs"
                      class="me-2 w-5 h-5 border-text-dark"
                    />
                    <label
                      class="flex items-center text-base text-primary"
                      :for="`checkbox-${n}`"
                    >
                      <img
                        width="15"
                        src="~/assets/images/icons/icno2.svg"
                        alt="icon"
                        class="me-2"
                      />
                      Administrative Blogs</label
                    >
                  </div>
                  <span class="text-sm font-medium text-primary">
                    (20)
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="blog_side_section">
            <h3>Recent Posts</h3>
            <ul>
              <blog-related-card v-for="n in 3" :key="n" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const i18n = useI18n();
const items = {
  title: i18n.t("NAV.blogs"),
  links: [
    {
      path: "/",
      name: i18n.t("NAV.home"),
    },
    {
      path: "/blogs",
      name: i18n.t("NAV.blogs"),
    },
  ],
};

</script>

<style lang="scss">
.blogs_page {
  .blogs_side_menu {
    .blog_side_section {
      @apply py-4 border-b last:border-0;
      h3 {
        @apply text-xl text-text-dark;
      }

      .blog_related_card {
        @apply border-b last:border-0;
      }
    }
  }
}
</style>
