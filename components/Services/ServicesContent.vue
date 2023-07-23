<template>
    <div class="service_build_section mt-5">
        <div class="text_section_wrapper max-w-100">
              <h3 class="main_title font-bold " >More benefits beyond legal support</h3>
              <div class="main_description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</div>
              <div class="main_description">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it.</div>
        </div>
        <div class=" mt-10 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div class="image_wrapper max-w-96" v-for="service in services" :key="service.id">
              <img
              :src="service.image"
              alt="blog img"
              />
            </div> 
        </div>
        <div class="text_section_wrapper  mt-10">
          <h3 class="main_title font-bold " >What to Know</h3>
          <div class="main_description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</div>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-10 ">
              <div class="service_icon border-2 p-2 rounded-2xl bg-white" v-for="icon in icons" :key="icon.id">
                <p>
                      <img
                      class="my-1 mx-2  inline-block "
                      :src="icon.iconImage"
                      alt="blog img"
                      />
                      <span class="text-base">{{icon.title}}</span>
                  </p>
              </div> 
        </div>
    </div>
</template>

<script setup>
    const services = [
  {
    id: 1,
    image: new URL(`@/assets/dammyImages/service8.png`, import.meta.url).href,
  },
  {
    id: 2,
    image: new URL(`@/assets/dammyImages/service7.png`, import.meta.url).href,
  },
];
const icons = [
    {
        id: 1,
        iconImage: new URL(`~/assets/dammyImages/icons/Vector.png`, import.meta.url).href,
        title: "Trustworthy Lawyers"
    },
    {
        id: 2,
        iconImage: new URL(`~/assets/dammyImages/icons/Variant2.png`, import.meta.url).href,
        title: "Trustworthy Lawyers"
    },
    {
        id: 3,
        iconImage: new URL(`~/assets/dammyImages/icons/Variant3.png`, import.meta.url).href,
        title: "Trustworthy Lawyers"
    },
    {
        id: 4,
        iconImage: new URL(`~/assets/dammyImages/icons/Group.png`, import.meta.url).href,
        title: "Medical & Health Care"
    },
    {
        id: 5,
        iconImage: new URL(`~/assets/dammyImages/icons/Variant4.png`, import.meta.url).href,
        title: "Medical & Health Care"
    },
];
</script>


<style lang="scss">
.services_page {
    .service_build_section {
        @apply py-5 border-b last:border-0 ;
      h3 {
        @apply   text-secondary text-xl;
      }
      
    }
  }

</style>