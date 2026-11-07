<script lang="ts" setup>
const categories: { title: string; skills: string[] }[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Web Forms",
      "VB.NET",
      "Java",
      "Spring Boot",
      "C",
      "Pro*C",
      "JavaScript",
      "PHP",
      "Laravel",
      "Vue.js",
      "Nuxt.js",
      "Flutter",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn-vue",
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      "Oracle SQL",
      "MySQL",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Mantis",
      "Jira",
      "Postman",
      "GDB",
    ],
  },
  {
    title: "Other",
    skills: [
      "REST/JSON APIs",
      "Microservices",
      "Batch Processing",
      "IBM Server Environments",
      "Technical Documentation (EDD)",
      "SIT/UAT Support",
      "Software Testing",
    ],
  },
  {
    title: "Languages",
    skills: ["Malay", "English"],
  },
];
</script>

<template>
  <div class="flex flex-col mt-14 gap-10 mb-14">
    <div v-for="category in categories" :key="category.title">
      <h2 class="text-lg font-bold text-yellow-500 mb-4">{{ category.title }}</h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in category.skills"
          :key="skill"
          class="rounded-full border border-yellow-600 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_0_4px_rgba(255,223,0,0.4)]"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
