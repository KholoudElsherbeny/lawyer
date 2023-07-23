<template>
  <footer id="footer" class="bg-secondary pt-11">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="logo_side pb-11 md:pb-0 md:pe-11 md:ps-14 w-full md:w-fit">
          <div class="logo flex justify-center md:justify-normal">
            <nuxt-link class="text-primary" :to="localePath('/')">
              <img src="~/assets/images/logo/logo_footer.svg" alt="logo"
            /></nuxt-link>
          </div>
        </div>
        <div
          class="content_side flex-1 border-t pt-3 md:pt-0 md:border-t-0 md:border-s border-third"
        >
          <div class="top border-b border-third md:ps-8">
            <div class="flex flex-wrap">
              <div class="links w-full mb-3 md:mb-0 md:w-6/12 lg:w-3/12">
                <ul>
                  <li>
                    <nuxt-link :to="localePath('/')">{{
                      $t("NAV.home")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about-us')">{{
                      $t("NAV.aboutUs")
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/services')">{{
                      $t("NAV.services")
                    }}</nuxt-link>
                  </li>

                  <li>
                    <nuxt-link to="/blogs">{{ $t("NAV.blogs") }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="contact_info w-full mb-3 md:mb-0 md:w-6/12 lg:w-5/12">
                <div class="inner_item">
                  <div class="item">
                    <div class="icon">
                      <img
                        src="~/assets/images/icons/phone.svg"
                        alt="phone_icon"
                      />
                    </div>
                    <div class="content">
                      <h3 class="title">{{ $t("HEADERS.phoneNumber") }}</h3>
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
              </div>
              <div class="download_section w-full my-3 lg:my-0 lg:w-4/12">
                <h4 class="text-text-dark text-base mb-2">
                  {{ $t("HEADERS.downloadApplication") }}:
                </h4>
                <div class="actions">
                  <a href="/">
                    <img
                      src="~/assets/images/google_play.svg"
                      alt="google_play_icon"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="~/assets/images/app_store.svg"
                      alt="app_store_icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="social_links flex items-center justify-between flex-wrap"
            >
              <ul class="list-unstyled social">
                <li>
                  <a href="/" aria-label="facebook">
                    <i class="pi pi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" aria-label="twitter">
                    <i class="pi pi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" aria-label="linked in">
                    <i class="pi pi-linkedin"></i>
                  </a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li>
                  <nuxt-link :to="localePath('/contact-us')">{{
                    $t("NAV.contactUs")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/terms')">{{
                    $t("NAV.termsOfUse")
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <p class="copyrights py-2 text-center text-text-dark">
            {{ $t("copyrights") }}
            <bdi
              >{{ year }} ©Lawyer • Designed by
              <a href="https://alalmiyalhura.com" target="_blank">Alalamyia</a>
            </bdi>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  mainSettings: { required: true },
});

const btnLoading = ref(false);

const data = reactive({
  name: "",
  email: "",
  phone: "",

  message: "",
});

const year = computed(() => new Date().getFullYear());
// function submit() {
//   btnLoading.value = true;

//   const frmData = new FormData();
//   frmData.append("name", data.name);
//   frmData.append("email", data.email);
//   frmData.append("phone", data.phone);
//   frmData.append("company", data.company);
//   frmData.append("message", data.message);

//   axios
//     .post("add-contact-us", frmData)
//     .then((res) => {
//       btnLoading.value = false;
//       toaster.success(res.data.msg);
//       data.name = "";
//       data.email = "";
//       data.phone = "";
//       data.message = "";
//       data.company = null;
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     })
//     .catch((err) => {
//       btnLoading.value = false;
//       toaster.error(err.response.data.message);
//     });

//   return {
//     submit,
//     uploadImage,
//     frmData,
//     preview,
//     btnLoading,
//   };
// }
</script>

<style lang="scss">
footer {
  .logo_side {
    background: url("~/assets/images/bg-footer.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom left;
  }
  .content_side {
    .contact_info {
      .inner_item {
        .item {
          @apply flex items-start mb-3 last:mb-0;
          .icon {
            @apply me-2 w-8 h-8 flex items-center justify-center bg-[#C8A45D1A] rounded-full;
          }
          .content {
            h3.title {
              @apply text-text-dark text-base mb-1;
            }
            a,
            p {
              @apply text-white font-normal text-base mb-1;
            }
          }
        }
      }
    }
    .links {
      li {
        &:not(:last-child) {
          @apply mb-3;
        }
        a {
          @apply text-lg capitalize hover:text-primary;
          color: #fff;
        }
      }
    }
  }
  .social_links {
    @apply py-2;
    ul {
      @apply flex items-center;
      li {
        @apply me-4 last:me-0 text-[#72809D]  hover:text-white;
      }
      &.social {
        li {
          i {
            @apply text-xl;
          }
        }
      }
    }
  }
}
</style>
