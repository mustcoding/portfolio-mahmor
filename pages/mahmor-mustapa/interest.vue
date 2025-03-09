<script lang="ts" setup>
import { Code, BookOpen, MapPlus, MonitorPlay, Dumbbell } from "lucide-vue-next";

const data = [
  { icon: Code, interest: "Coding" },
  { icon: BookOpen, interest: "Reading" },
  { icon: MapPlus, interest: "Travelling" },
  { icon: MonitorPlay, interest: "Movie" },
  { icon: Dumbbell, interest: "Exercising" },
];
</script>

<template>
  <Layout>
    <div class="flex flex-col h-screen mt-10 gap-4 place-items-center w-full">
      <div class="text-center text-white">
        <h1 class="text-xl">INTEREST</h1>
        <h1 class="font-bold text-3xl">WHAT I LIKE TO DO</h1>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center p-10 gap-4 w-full"
      >
        <Card
          class="bg-yellow-600 border border-yellow-800 w-full h-60 sm:w-90 flex flex-col justify-center items-center text-center"
          v-for="data in data"
        >
          <CardHeader
            class="flex flex-col justify-center items-center text-center gap-10"
          >
            <CardTitle>
              <div
                class="rounded-full border border-black w-16 h-16 flex items-center justify-center"
              >
                <component :is="data.icon" class="items-center"></component>
              </div>
            </CardTitle>
            <CardDescription class="text-xl text-black font-medium">{{
              data.interest
            }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </Layout>
</template>
