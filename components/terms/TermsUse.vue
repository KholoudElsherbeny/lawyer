<template>
    <div class="service_build_section mt-5">
        <div class="text_section_wrapper max-w-100 p-5" v-for="term in terms" :key="term.id" >
              <h3 class="main_title font-bold " >{{term.title}}</h3>
              <div class="main_description">{{term.description1}}</div>
              <div class="main_description">{{term.description2}}</div>
              <div class="main_description">{{term.description1}}</div>
              <div class="main_description">{{term.description3}}</div>
        </div>
        <div class="text_section_wrapper max-w-100 p-5" v-for="term in terms" :key="term.id" >
            <h3 class="main_title font-bold " >{{term.title}}</h3>
            <div class="main_description">{{term.description1}}</div>
            <div class="main_description">{{term.description2}}</div>
            <div class="main_description">{{term.description1}}</div>
            <div class="main_description">{{term.description3}}</div>
        </div>
    </div>
</template>

<script setup>
    const terms = [
  {
    id: 1,
    title: "General",
    description1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.",
    description2: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it.",
    description3: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."
  },
  {
    id: 2,
    title: "More benefits beyond legal",
    description1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.",
    description2: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it.",
    description3: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."
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