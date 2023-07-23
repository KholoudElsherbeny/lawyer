<template>
  <nuxt-link :to="localePath('/blogs/test')"
    class="blog_card rounded-3xl overflow-hidden flex flex-col border mt-9 w-full max-w-[370px] mx-auto"
  >
    <div class="blog_img">
      <img
        class="max-w-full object-cover block"
        src="~/assets/dammyImages/blog.svg"
        alt="blog img"
      />
    </div>
    <div class="blog_card_body px-3 pt-3 pb-5">
      <div class="top_body_header">
        <p>
          <img src="~/assets/images/icons/date_icon.svg" alt="date icon" />
          <span>19 Nov , 2022</span>
        </p>
        <p>
          <img src="~/assets/images/icons/file_icon.svg" alt="file icon" />
          <span>Criminal</span>
        </p>
      </div>
      <h2 class="text-xl font-bold max-w-[320px] my-2">
        More benefits beyond legal support
      </h2>
      <p class="text-text-dark text-base max-w-[320px]">
        We know life’s hard. So we try to make it simple: no retainers or legal
        fees..
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.blog_card {
  .blog_card_body {
    .top_body_header {
      @apply flex items-center;
      p {
        @apply flex items-center me-2 last:me-0 text-text-dark text-sm;
        img {
          @apply me-2;
        }
      }
    }
  }
}
</style>
