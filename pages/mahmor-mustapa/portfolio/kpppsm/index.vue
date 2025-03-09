<script lang="ts" setup>
import { X } from "lucide-vue-next";
const showDetail = ref(false);

const title = ref(
  `Sistem Ahli Kesatuan Pembantu Pembedahan Pergigian Semalaysia (KPPPSM)`
);

const category = ref("Web Application");

const overview = ref(`The Sistem Ahli KPPPSM is a web application designed to modernize
membership management for Kesatuan Pembantu Pembedahan Pergigian Semalaysia (KPPPSM) by
replacing traditional paper-based process with a seamless digital platform. Built using Vue.js,
Tailwind CSS, Shadcn-vue, and Laravel, the system provides a secure, responsive, and user-friendly interface for
members to manage applications, track benefits, and stay updated with union activities. By enhancing data security,
reducing manual workloads, and improving accessibility, this solution ensures a more efficient and 
streamlined membership experience.`);

const back_end = ref("Laravel");
const front_end = ref("Vue.js + Nuxt.js");
const database = ref("Laragon");
const web_design = ref(["HTML", "Tailwind CSS", "Shadcn-Vue"]);
const api_testing = ref("Postman");

const config = useRuntimeConfig();

const image_path = ref([
  `${config.app.baseURL}image/kpppsm/login.jpg`,
  `${config.app.baseURL}image/kpppsm/dashboard.jpg`,
  `${config.app.baseURL}image/kpppsm/myKPPPSMcare.jpg`,
  `${config.app.baseURL}image/kpppsm/member.jpg`,
  `${config.app.baseURL}image/kpppsm/letter.jpg`,
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
            :back_end="back_end"
            :database="database"
            :web_design="web_design"
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
