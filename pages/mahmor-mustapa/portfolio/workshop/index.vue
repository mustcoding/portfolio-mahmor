<script lang="ts" setup>
import { X } from "lucide-vue-next";
const showDetail = ref(false);

const title = ref(`MelakaGo (Workshop II Project)`);

const category = ref("Web Application, Mobile Application");

const overview = ref(`MelakaGo is an interactive tourism application designed to enhance visitor engagement at 
historical sites in Malacca. The application provides a multi-platform solution, featuring a web-based admin panel for management and 
mobile application for tourist and registered businesses. Developed using Flutter, PHP, MySQL, HTML, CSS, and Bootstrap, 
the system enables users to explore historical locations seamlessly. One of its key features is QR Code scanning, 
which allows visitors to access detailed historical content and participate in interactive quizzes. By offering an engaging, informative, and user-friendly experience, MelakaGo 
aims to revolutionize the way tourist explore Malacca's rich cultural heritage.`);

const back_end = ref("PHP");
const mobile_app = ref("Flutter");
const database = ref("MySQL Workbench");
const web_design = ref(["HTML", "CSS", "Bootstrap"]);
const api_testing = ref("Postman");
const config = useRuntimeConfig();
const basePath = config.app.baseURL || "";
const image_path = ref([
  "/image/melakago/login.jpg",
  "/image/melakago/homepage.jpg",
  "/image/melakago/add_question.jpg",
]);

const show_detail = () => {
  showDetail.value = !showDetail.value;
};
</script>
<template>
  <Layout>
    <div class="flex flex-col min-h-screen gap-10 w-full mb-10">
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
            :back_end="back_end"
            :mobile_app="mobile_app"
            :database="database"
            :api_testing="api_testing"
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
                  <img :src="`${basePath}image_path`" class="rounded-lg w-auto" />
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
