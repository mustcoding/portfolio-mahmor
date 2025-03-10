<script lang="ts" setup>
defineProps([
  "title",
  "category",
  "back_end",
  "mobile_app",
  "overview",
  "front_end",
  "database",
  "web_design",
  "api_testing",
  "facial_recognition",
  "rfid",
  "year",
  "url",
]);

const viewProject = (path: string) => {
  window.open(path, "_blank");
};
</script>
<template>
  <div class="flex flex-col text-white w-full p-8 gap-4">
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <p class="font-medium">Category - {{ category }}</p>
    <hr class="border-t-2 border-white opacity-50" />
    <div class="flex flex-col gap-8 sm:grid grid-cols-[1.5fr_1fr] sm:gap-20">
      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">Overview</h1>
        <h1 class="text-justify">{{ overview }}</h1>
      </div>
      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">Project Info</h1>
        <div class="flex gap-2">
          <h1 class="font-bold">Year:</h1>
          <h1>{{ year }}</h1>
        </div>
        <h1 class="font-bold">Tech Stack:</h1>
        <ul class="list-disc ml-8">
          <li v-if="back_end">Back-end: {{ back_end }}</li>
          <li v-if="mobile_app">Mobile App: {{ mobile_app }}</li>
          <li v-if="database">Database: {{ database }}</li>
          <li v-if="web_design">
            <div class="flex flex-wrap gap-1">
              <p class="whitespace-nowrap">Web Design:</p>
              <div class="flex flex-wrap gap-1 min-w-0">
                <span v-for="(web_design, index) in web_design" :key="index">
                  {{ web_design }}<span v-if="index !== web_design.length - 1">,</span>
                </span>
              </div>
            </div>
          </li>
          <li v-if="facial_recognition">Facial Recognition: {{ facial_recognition }}</li>
          <li v-if="rfid">RFID Integration: {{ rfid }}</li>
          <li v-if="api_testing">API Testing: {{ api_testing }}</li>
        </ul>
        <h1 v-if="url" class="font-bold">GitHub URL:</h1>
        <ul class="list-disc ml-8">
          <li
            v-for="url in url"
            @click="viewProject(url.path)"
            class="cursor-pointer text-blue-400 hover:text-yellow-600"
          >
            {{ url.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
