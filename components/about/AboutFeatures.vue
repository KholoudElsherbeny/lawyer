<template>
  <div class="about_features_card rounded-2xl border p-8">
    <div class="icon mb-14">
      <img :src="item.image" alt="icon" />
    </div>
    <div class="card_content">
      <h3 class="text-secondary text-xl font-bold capitalize mb-2">
        {{ item.title }}
      </h3>
      <p class="text-[#697E95] leading-[2rem]">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: { required: true },
});
</script>

<style></style>
