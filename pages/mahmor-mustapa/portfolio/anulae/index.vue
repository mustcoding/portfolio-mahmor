<script lang="ts" setup>
import { X } from "lucide-vue-next";

// Client project is confidential, so screenshots are not shown.
// const image_path = ref([
//   "/portfolio-mahmor/image/anulae/login.jpg",
//   "/portfolio-mahmor/image/anulae/homepage.jpg",
//   "/portfolio-mahmor/image/anulae/aid_application.jpg",
//   "/portfolio-mahmor/image/anulae/pengumuman.jpg",
//   "/portfolio-mahmor/image/anulae_new/anulae_1.jpg",
//   "/portfolio-mahmor/image/anulae_new/anulae_2.jpg",
//   "/portfolio-mahmor/image/anulae_new/anulae_3.jpg",
// ]);

const title = ref(
  `Sistem Ahli ANULAE (The Amalgamated Nation Union Authorities Employees)`
);
const category = ref("Web Application");
const company = ref("Alto Soft Sdn. Bhd.");
const year = ref("2024 - 2025");

const overview = ref(`Sistem Ahli ANULAE is a membership management system for ANULAE, delivered as a modern,
responsive and user-friendly digital platform. I worked on it in two phases: first on the front-end of the original
system during my internship, and then as a full-stack developer rebuilding the entire front-end from scratch and
integrating it with Laravel back-end APIs.`);

const tech = ref([
  { label: "Front-end", value: "Vue.js, Nuxt.js" },
  { label: "Back-end", value: "Laravel" },
  { label: "Web Design", value: "HTML, Tailwind CSS, Shadcn-vue" },
  { label: "API Testing", value: "Postman" },
]);

const highlights = ref([
  {
    title: "Rebuild – Full-Stack Developer (2025)",
    points: [
      "Rebuilt the membership management system front-end from scratch using Vue.js and Shadcn-vue modular, reusable components.",
      "Built a responsive, accessible UI with Tailwind CSS for usability across devices.",
      "Built and integrated Laravel back-end APIs, managing data flow and system logic.",
      "Emphasized scalable architecture, modular code structure and best practices for future maintainability.",
      "Conducted code reviews and debugging to maintain code quality.",
    ],
  },
  {
    title: "First Version – Front-End Developer, Internship (2024)",
    points: [
      "Contributed to the front-end development of the new ANULAE web application.",
      "Built mobile-friendly interfaces with Tailwind CSS.",
      "Used Shadcn-vue to build reusable and scalable UI components.",
    ],
  },
]);
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
          :company="company"
          :overview="overview"
          :tech="tech"
          :highlights="highlights"
          :year="year"
        />
        <hr class="border-t-2 border-white opacity-50" />
      </div>
      <p class="text-white/70 text-sm text-center p-6">
        Screenshots are not shown because this is a confidential client project.
      </p>
    </div>
  </Layout>
</template>
