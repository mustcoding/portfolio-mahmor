<script lang="ts" setup>
import { X } from "lucide-vue-next";
const showDetail = ref(false);

const image_path = ref([
  "/portfolio-mahmor/image/anulae/login.jpg",
  "/portfolio-mahmor/image/anulae/homepage.jpg",
  "/portfolio-mahmor/image/anulae/aid_application.jpg",
  "/portfolio-mahmor/image/anulae/pengumuman.jpg",
]);

const title = ref(
  `Sistem Ahli ANULAE (The Amalgamated Nation Union Authorities Employees)`
);

const category = ref("Web Application");

const overview = ref(`The Sistem Ahli ANULAE is a front-end web application for ANULAE to enhance
membership management through a modern and user-friendly digital platform. Built with Vue.js, 
Tailwind CSS, and Shadcn-Vue, the system features a responsive interface designed for seamless
navigation across devices. By leveraging Tailwind CSS for styling and Shadcn-vue for reusable 
and scalablle UI components, the platform ensures a smooth user experience while maintaining 
design consistency. This project improves accessibility, streamlines process, and provides an
efficient digital solution for ANULAE`);

const front_end = ref("Vue.js + Nuxt.js");
const database = ref("Laragon");
const web_design = ref(["HTML", "Tailwind CSS", "Shadcn-Vue"]);
const api_testing = ref("Postman");
const year = ref("2024");

const show_detail = () => {
  showDetail.value = !showDetail.value;
};
</script>
<template>
  <Layout>
    <div class="flex flex-col min-h-screen gap-4 w-full mb-10">
      <div class="p-100">
        <div class="flex justify-end">
          <Button
            @click="navigateTo('/mahmor-mustapa/portfolio')"
            class="shadow-[0_0_4px_rgba(255,223,0,0.8)]"
            ><X
          /></Button>
        </div>
        <PortfolioDescription
          :title="title"
          :category="category"
          :overview="overview"
          :front_end="front_end"
          :database="database"
          :web_design="web_design"
          :api_testing="api_testing"
          :year="year"
        />
        <hr class="border-t-2 border-white opacity-50" />
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
