<script lang="ts" setup>
import { X } from "lucide-vue-next";
const showDetail = ref(false);

const title = ref(`MyPortfolio`);

const category = ref("Web Application");

const overview = ref(`My digital portfolio is a web application designed to showcase my porjects, skills, 
and experiences in a modern and interactive way. Built with Vue.js, Nuxt.js, and Tailwind CSS, 
the portfolio features a clean, responsive, and user-friendly design, ensuring seamless navigation across devices. 
It includes sections for projects, work experience, education, and contact information, with dynamic 
content rendering for easy updates. By leveraging Tailwind CSS for styling and Vue.js for efficient component-based 
development, this portfolio provides a sleek and professional online presence. `);

const front_end = ref("Vue.js + Nuxt.js");
const web_design = ref(["HTML", "Tailwind CSS", "Shadcn-Vue"]);
const config = useRuntimeConfig();
const basePath = config.app.baseURL || "";
const image_path = ref([
  "portfolio-mahmor/image/myportfolio/main.jpg",
  "portfolio-mahmor/image/myportfolio/aboutme.jpg",
  "portfolio-mahmor/image/myportfolio/education.jpg",
  "portfolio-mahmor/image/myportfolio/portfolio.jpg",
  "portfolio-mahmor/image/myportfolio/interest.jpg",
]);

const show_detail = () => {
  showDetail.value = !showDetail.value;
};
</script>
<template>
  <Layout>
    <div class="flex flex-col min-h-screen gap-10 w-full mb-10 p-2">
      <div class="p-100">
        <div class="flex justify-between">
          <Button class="w-36 cursor-pointer" @click="show_detail"
            >Project Details</Button
          >
          <Button @click="navigateTo('/mahmor-mustapa/portfolio')"><X /></Button>
        </div>
        <div v-if="showDetail">
          <PortfolioDescription
            :title="title"
            :category="category"
            :overview="overview"
            :web_design="web_design"
          />
          <hr class="border-t-2 border-white opacity-50" />
        </div>
      </div>
      <div class="flex justify-center items-center w-full">
        <Card
          class="bg-yellow-600 border border-yellow-800 w-full sm:w-4/5 lg:w-3/5 h-90 flex flex-col justify-center items-center text-center cursor-pointer p-8"
        >
          <CardHeader
            class="flex flex-col justify-center items-center text-center gap-10 w-full"
          >
            <Carousel class="w-full">
              <CarouselContent>
                <CarouselItem
                  v-for="image_path in image_path"
                  :key="image_path"
                  class="flex justify-center item-center w-full"
                >
                  <img :src="image_path" class="rounded-lg w-auto" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardHeader>
        </Card>
      </div>
    </div>
  </Layout>
</template>
