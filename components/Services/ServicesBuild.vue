<template>
    <div class="services_build_section rounded-2xl mt-5">
        <h3>We Build Trust</h3> 
        <p class="text-white   mt-5 ms-6">
            Your rights were violated? We're here to help you.
        </p>
        <div class="actions mt-10 bg-primary rounded-2xl">
            <nuxt-link class="base-btn " :to="localePath('/')">
                {{ $t("BUTTONS.bookAppointment") }}
    
                <i
                  class="pi"
                  :class="
                    $i18n.locale == 'en'
                      ? ' pi-arrow-up-right'
                      : ' pi-arrow-up-left'
                  "
                ></i>
              </nuxt-link>
          </div>
    </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
    .services_build_section {
        @apply h-[250px]  bg-cover flex flex-col items-center justify-center  bg-[url('~/assets/dammyImages/service6.png')];
        @apply py-2 border-b last:border-0 ;
      h3 {
        @apply  me-40 text-white;
      }
    }
</style>