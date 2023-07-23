<template>
    <div class="contactus_page bg-white">
      <general-breadcrumb :items="items" />

      <div class="Faq_section_wrapper" >
        <div class="container">
          <div class="flex flex-wrap justify-center base_section_content bg-[#EDF6FD] py-10 my-20 rounded-lg">
            <div class="image_wrapper my-20  md:mb-0 md:w-1/2">
                <div class="inner_item mx-10">
                    <div class="main_title">Get a personal <span>consultation</span></div>
                    <div class="item">
                      <div class="icon">
                        <img
                          src="~/assets/images/icons/phone.svg"
                          alt="phone_icon"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title ">{{ $t("HEADERS.phoneNumber") }}</h3>
                        <div class="desc ">
                          <a href="tel:1010101010" aria-label="phone-number"
                            >1010101010</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="icon">
                        <img
                          src="~/assets/images/icons/email.svg"
                          alt="phone_icon"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">{{ $t("HEADERS.emailAddress") }}</h3>
                        <div class="desc">
                          <a href="tel:1010101010" aria-label="phone-number"
                            >1010101010</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="icon">
                        <img
                          src="~/assets/images/icons/location.svg"
                          alt="phone_icon"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">{{ $t("HEADERS.address") }}</h3>
                        <div class="desc">
                          <a href="tel:1010101010" aria-label="phone-number"
                            >1010101010</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="icon">
                        <img
                          src="~/assets/images/icons/work.svg"
                          alt="phone_icon"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">{{ $t("HEADERS.worktime") }}</h3>
                        <div class="desc">
                          <p>
                            Days : Sunday - Thursday
                          </p>
                          <p>
                            Time : 09:00 AM - 05:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                <nuxt-page/>
            </div>
            <div class="faq_section_wrapper  md:mb-0 	 lg:w-1/2">
                <contact-us/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import InputText from 'primevue/inputtext';
  const i18n = useI18n();
  const items = {
    title: i18n.t("NAV.contactUs"),
    links: [
      {
        path: "/",
        name: i18n.t("NAV.home"),
      },
      {
        path: "/contact-us",
        name: i18n.t("NAV.contactUs"),
      },
    ],
  };

</script>
  
<style lang="scss">
.inner_item {
        .main_title {
          max-width: 520px;
            @apply font-bold text-5xl  mb-10;
                span {
                    @apply text-primary;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                }
        }
        .item {
          @apply flex items-start mb-3 last:mb-0;
          .icon {
            @apply me-2 w-10 h-10 flex items-center justify-center bg-[#C8A45D1A] rounded-full;
          }
          .content {
            h3.title {
              @apply text-secondary text-2xl mb-1;
            }
            a,
            p {
              @apply text-secondary font-normal text-base mb-1;
            }
          }
        }
}
</style> 