<template>
  <div class="solution_section_swiper">
    <h2 class="title translate-y-20 w-10/12 xl:w-6/12 font-medium">
      <span>Law Solutions</span> to solve your problems
    </h2>

    <Swiper
      :modules="[SwiperAutoplay, Navigation, A11y]"
      :slides-per-view="1"
      :space-between="30"
      :breakpoints="breakpoints"
      navigation
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      ref="swiper"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <div class="solution_card rounded-2xl bg-[#F5FBFF] p-8">
          <div class="icon mb-20">
            <img src="~/assets/images/icons/icno2.svg" alt="icon" />
          </div>
          <div class="card_content">
            <h3 class="text-secondary text-xl font-bold capitalize mb-2">
              criminal
            </h3>
            <p class="text-[#697E95] w-9/12">benefits beyond legal support</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, A11y } from "swiper";

const breakpoints = {
  480: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};
</script>

<style lang="scss">
.solution_section_swiper {
  .swiper {
    padding-top: 8rem;

    overflow-y: visible;
    // overflow-x: hidden;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 30px;
    &::after {
      font-size: 1.5rem;
    }
  }
  .swiper-button-prev {
    left: unset;
    right: 50px;
  }
}
</style>
