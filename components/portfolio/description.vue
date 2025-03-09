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
]);
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
        <h1>Year - 2024</h1>
        <h1>Tech Stack:</h1>
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
      </div>
    </div>
  </div>
</template>
