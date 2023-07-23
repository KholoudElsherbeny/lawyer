<template>
  <div class="notify_wrapper">
    <div class="notify_content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.notify_wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #00000086;
  z-index: 999;
  @apply flex flex-col items-center justify-center;
  .notify_content {
    max-width: 350px;
    // min-width: 350px;
    @apply rounded-2xl bg-white px-4 py-6;
    img {
      @apply mx-auto mb-5;
    }
    h4 {
      @apply text-secondary font-medium text-center text-2xl font-bold mb-3;
    }
    p {
      @apply text-sm font-medium text-text-dark text-center;
    }
  }
}
</style>
