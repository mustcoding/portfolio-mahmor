<script lang="ts" setup>
import { X } from "lucide-vue-next";

const title = ref(
  `MyINFRA – Government Immovable Asset Management System (Kementerian Kerja Raya)`
);
const category = ref("Government Web Application");
const company = ref("Alto Soft Sdn. Bhd.");
const year = ref("2025");

const overview = ref(`MyINFRA is the Kementerian Kerja Raya system for managing government immovable assets
in line with the Tatacara Pengurusan Aset Tak Alih (TPATA) 2024, the government's guidelines for managing
immovable assets. At Alto Soft Sdn. Bhd., I developed two TPATA-based modules as Laravel and Vue.js services in a
Docker-based microservices architecture, translating the TPATA procedures into system workflows, approval stages,
access rules and reports. I also resolved Docker environment issues such as storage and cache folder permissions.`);

const tech = ref([
  { label: "Back-end", value: "Laravel" },
  { label: "Front-end", value: "Vue.js" },
  { label: "Infrastructure", value: "Docker (microservices)" },
  { label: "Guidelines", value: "TPATA 2024" },
]);

const highlights = ref([
  {
    title: "Asset Loss & Write-Off (Hapus Kira) Module – TPATA 2024",
    points: [
      "Built the asset loss and write-off module following the TPATA 2024 procedures for reporting, verifying and approving the loss and write-off of government immovable assets.",
      "Implemented the 4-stage approval workflow required by TPATA, so each case is prepared, recommended, reviewed and approved by the right officer.",
      "Implemented role- and location-based access from district to ministry level, matching the TPATA levels of responsibility.",
      "Added time-limited token access for external parties and automated SLA email reminders to keep cases within the TPATA timelines.",
      "Implemented quarterly loss and write-off reports, and a shared reference number format linking each case's initial and final reports.",
      "Built a correction flow that returns records to the original creator, with a full audit trail.",
    ],
  },
  {
    title: "Asset Operation & Maintenance Planning Module – TPATA 2024",
    points: [
      "Built the asset operation and maintenance planning module based on the TPATA 2024 requirements for planning and managing immovable asset maintenance.",
      "Enabled preparing, verifying and monitoring annual maintenance plans and budgets at premises level.",
      "Aligned the maintenance plans and budgets to the approved budget allocations.",
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
        <p class="text-white/70 text-sm text-center p-6">
          Screenshots are not shown because this is a government client system.
        </p>
      </div>
    </div>
  </Layout>
</template>
