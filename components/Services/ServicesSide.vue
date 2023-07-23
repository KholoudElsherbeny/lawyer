<template>
    <div class="service_side_section rounded-2xl bg-[#F5FBFF] p-4">
              <h3>What Service Includes :</h3>
              <ul class="pt-5 pb-3">
                <li v-for="n in 5" :key="n" class="mb-3 last:mb-0 ">
                  <div class="flex items-center">
                    <div class="flex items-center flex-1">
                      <label
                        class="flex items-center text-base text-primary"
                      >
                        <img
                          width="15"
                          src="~/assets\dammyImages\icons\right.svg"
                          alt="icon"
                          class="me-2"
                        />
                        Online Appointments </label
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </div>
</template>


<style lang="scss">
.services_page {
  .services_side_menu {
    .service_side_section {
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
