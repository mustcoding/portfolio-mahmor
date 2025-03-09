<script lang="ts" setup>
import { Code, BookOpen, MapPlus, MonitorPlay, Dumbbell } from "lucide-vue-next";

const data = [
  {
    name: "My Portfolio",
    image_path: "/image/myportfolio/main.jpg",
    path: "/mahmor-mustapa/portfolio/myportfolio",
  },
  {
    name: "Sistem Ahli KPPPSM",
    image_path: "/image/kpppsm/login.jpg",
    path: "/mahmor-mustapa/portfolio/kpppsm",
  },
  {
    name: "Sistem Ahli ANULAE",
    image_path: "/image/anulae/aid_application.jpg",
    path: "/mahmor-mustapa/portfolio/anulae",
  },
  {
    name: "FYP Project",
    image_path: "/image/fyp/homepage.jpg",
    path: "/mahmor-mustapa/portfolio/fyp",
  },
  {
    name: "MelakaGo",
    image_path: "/image/melakago/homepage.jpg",
    path: "/mahmor-mustapa/portfolio/workshop",
  },
];
</script>

<template>
  <Layout>
    <div class="flex flex-col h-screen mt-10 gap-4 place-items-center w-full">
      <div class="text-center text-white">
        <h1 class="text-xl">PORTFOLIO</h1>
        <h1 class="font-bold text-3xl">MY WORKS</h1>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center p-10 gap-4 w-full"
      >
        <Card
          class="bg-yellow-600 border border-yellow-800 w-full h-auto sm:w-90 flex flex-col justify-center items-center text-center cursor-pointer"
          v-for="data in data"
          @click="navigateTo(data.path)"
        >
          <CardHeader class="flex flex-col justify-center items-center text-center gap-6">
            <CardTitle>
              <div
                class="border border-black w-full h-auto flex items-center justify-center"
              >
                <img :src="data.image_path" class="w-full" />
              </div>
            </CardTitle>
            <CardDescription class="text-xl text-black font-medium">{{
              data.name
            }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </Layout>
</template>
