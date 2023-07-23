<template>
  <div class="Faq_section_wrapper bg-[#EDF6FD] py-14" >
    <div class="container">
      <div class="flex flex-wrap justify-center base_section_content">
        <div class="image_wrapper my-20  md:mb-0 md:w-1/2">
          <figure>
            <div class="text_section_wrapper  mx-1">
              <h2 class="main_title text-primary"><span>FAQ</span></h2>
              <p class="main_description">Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts.</p>
            <img src="~/assets/dammyImages/books.png" alt="books" class="h-auto  me-auto rounded-lg">  
            <nuxt-page/>
          </div>
          </figure>
        </div>
        <div class="faq_section_wrapper md:w-1/2 ">
          <Accordion class="accordion-custom max-w-1/2 " :activeIndex="0">
            <AccordionTab>
                <template #header>
                  <span class="">More benefits beyond legal support ?</span>
                    <i class="fa-solid fa-plus"></i>
                </template>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <span>More benefits beyond legal support ?</span>
                    <i class="fa-solid fa-plus"></i>
                </template>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template  #header>
                    <span>More benefits beyond legal support ?</span>
                    <i class="fa-solid fa-plus"></i>
                </template>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
            </AccordionTab>
            <AccordionTab>
              <template #header>
                  <span>More benefits beyond legal support ?</span>
                  <i class="fa-solid fa-plus"></i>
              </template>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
          </AccordionTab>
          <AccordionTab>
              <template #header>
                  <span>More benefits beyond legal support ?</span>
                  <i class="fa-solid fa-plus"></i>
              </template>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Conso nantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
          </AccordionTab>
        </Accordion>
        </div>
      </div>
    </div>
  </div>
  </template>
  
<script setup >
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>
  
<style lang="scss">
.p-accordion-tab{
  @apply p-5 mx-3 ;
  .p-accordion-header{
    @apply rounded-lg border bg-[#EDF6FD] hover:bg-[#EDF6FD] focus-visible:bg-third;
    i{
      @apply text-primary text-base	ml-auto;
    }
    .p-accordion-header-link {
      background-color: #EDF6FD !important;    
    }
    .p-accordion-header-link:focus{
      box-shadow: none !important;
    }
    .p-accordion-header-action{
      @apply   bg-[#EDF6FD] cursor-pointer hover:bg-[#EDF6FD] focus-visible:bg-third;
      span{
        @apply text-base px-0
      }
    }
    svg{
      display: none;
    }
  }
  .p-accordion-content{
    @apply bg-[#EDF6FD]  hover:bg-[#EDF6FD];
   }
}


</style>
  