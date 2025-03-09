<script lang="ts" setup>
import { Progress } from "@/components/ui/progress"; // Import the Progress component

const skills = [
  { label: "C++", content: "C++", percentage: 70 },
  { label: "JavaScript", content: "JavaScript", percentage: 85 },
  { label: "PHP", content: "PHP", percentage: 85 },
  { label: "Java", content: "Java", percentage: 60 },
  { label: "Dart", content: "Dart", percentage: 65 },
  { label: "HTML", content: "HTML", percentage: 90 },
  { label: "CSS", content: "CSS", percentage: 73 },
  { label: "Tailwind CSS", content: "Tailwind CSS", percentage: 85 },
  { label: "Bootstrap", content: "Bootstrap", percentage: 85 },
  { label: "Vue.js", content: "Vue.js", percentage: 85 },
  { label: "Nuxt.js", content: "Nuxt.js", percentage: 85 },
  { label: "Flutter", content: "Flutter", percentage: 65 },
  { label: "Shadcn-Vue", content: "Shadcn-Vue", percentage: 90 },
  { label: "Laravel", content: "Laravel", percentage: 85 },
  { label: "REST APIs", content: "REST APIs", percentage: 90 },
  { label: "SQL", content: "SQL", percentage: 85 },
  { label: "GitLab", content: "GitLab", percentage: 85 },
  { label: "GitHub", content: "GitHub", percentage: 85 },
  { label: "Jira", content: "Jira", percentage: 85 },
  { label: "Postman", content: "Postman", percentage: 90 },
  { label: "Figma", content: "Figma", percentage: 90 },
];
</script>

<template>
  <div class="flex flex-col md:grid grid-cols-2 mt-14 gap-10 mb-14">
    <div class="flex gap-10" v-for="(skill, index) in skills" :key="index">
      <div class="flex items-center w-full gap-4">
        <span class="text-left w-36 font-bold"> {{ skill.label }} </span>
        <div class="w-full">
          <Progress :model-value="skill.percentage" />
        </div>
        <span class="text-right w-20 font-bold"> {{ skill.percentage }}% </span>
      </div>
    </div>
  </div>
</template>
