<script lang="ts" setup>
import { X } from "lucide-vue-next";

// Client project is confidential, so screenshots are not shown.
// const image_path = ref([
//   "/portfolio-mahmor/image/ppam/ppam_1.jpg",
//   "/portfolio-mahmor/image/ppam/ppam_2.jpg",
// ]);

const title = ref(`Sistem Perumahan Penjawat Awam Malaysia (SPPAM)`);
const category = ref("Government Web Application");
const company = ref("Alto Soft Sdn. Bhd.");
const year = ref("2025");

const overview = ref(`Perumahan Penjawat Awam Malaysia (PPAM) is a national housing programme that helps
civil servants own homes at prices below market value. It is open to civil servants serving the Federal and State
Governments, local authorities and statutory bodies. Sistem PPAM (SPPAM) is the programme's central online
platform: applicants register, apply for housing projects and check their application status online, and offers
to successful applicants are managed centrally through the system. At Alto Soft Sdn. Bhd., I worked on enhancing
this system, focusing on public communication, change requests and system reliability.`);

const tech = ref([
  { label: "Back-end", value: "Laravel" },
  { label: "Web Design", value: "HTML, CSS, Bootstrap" },
]);

const highlights = ref([
  {
    title: "Aduan (Complaint) Module",
    points: [
      "Developed a new Aduan (Complaint) module allowing both registered users and the public to submit complaints or inquiries about the housing programme.",
      "Built internal routing so each complaint or inquiry reaches the right officers for a response.",
      "Implemented public-facing access through email links, so external users without an account can track their complaints and reply to responses.",
      "Improved transparency and communication between applicants and the programme's administrators.",
    ],
  },
  {
    title: "Change Requests & Enhancements",
    points: [
      "Delivered change requests that enhanced system functionality and improved user workflows.",
      "Worked within an existing Laravel and Bootstrap codebase serving civil servants nationwide.",
    ],
  },
  {
    title: "Preventive Maintenance & Support",
    points: [
      "Performed preventive maintenance, including server monitoring and routine health checks.",
      "Helped keep the system reliable and performant for applicants checking their applications and offers.",
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
