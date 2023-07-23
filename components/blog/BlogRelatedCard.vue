<template>
  <li class="blog_related_card flex items-center w-full py-4">
    <div class="blog_img w-20 h-20 rounded-full overflow-hidden">
      <img
        src="~/assets/dammyImages/blog.svg"
        class="w-full h-full object-cover"
        alt="blog img"
      />
    </div>
    <div class="blog_card_body px-3 max-w-[250px] me-auto">
      <h2 class="text-base font-bold max-w-[320px] mb-2">
        More benefits beyond legal support
      </h2>

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
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss">
.blog_related_card {
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
