<script lang="ts" setup>
import { X } from "lucide-vue-next";

// Client project is confidential, so screenshots are not shown.
// const image_path = ref([
//   "/portfolio-mahmor/image/kpppsm/login.jpg",
//   "/portfolio-mahmor/image/kpppsm/dashboard.jpg",
//   "/portfolio-mahmor/image/kpppsm/myKPPPSMcare.jpg",
//   "/portfolio-mahmor/image/kpppsm/member.jpg",
//   "/portfolio-mahmor/image/kpppsm/letter.jpg",
// ]);

const title = ref(
  `Sistem Ahli Kesatuan Pembantu Pembedahan Pergigian Semalaysia (KPPPSM)`
);
const category = ref("Web Application");
const company = ref("Alto Soft Sdn. Bhd.");
const year = ref("2024 - 2025");

const overview = ref(`Sistem Ahli KPPPSM is a membership web system for Kesatuan Pembantu Pembedahan Pergigian
Semalaysia (KPPPSM) that replaced traditional paper-based processes with an online platform. Built with Vue.js,
Tailwind CSS, Shadcn-vue and Laravel, it gives members a secure, responsive and user-friendly way to manage their
applications, benefits and union matters. I started developing it during my internship and took full ownership of
the project afterwards.`);

const tech = ref([
  { label: "Front-end", value: "Vue.js, Nuxt.js" },
  { label: "Back-end", value: "Laravel" },
  { label: "Web Design", value: "HTML, Tailwind CSS, Shadcn-vue" },
  { label: "API Testing", value: "Postman" },
]);

const highlights = ref([
  {
    title: "System Development",
    points: [
      "Developed a new membership web system that replaced paper-based processes, starting during my internship.",
      "Built member features including membership applications, benefit records and official letter generation.",
      "Built a mobile-friendly interface with Tailwind CSS and reusable Shadcn-vue components, with a Laravel back-end for secure data handling.",
    ],
  },
  {
    title: "Project Ownership",
    points: [
      "Took full ownership of the project after my internship, managing all change requests and enhancements based on client feedback.",
      "Maintained a scalable system with reusable UI components and secure back-end integration.",
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
