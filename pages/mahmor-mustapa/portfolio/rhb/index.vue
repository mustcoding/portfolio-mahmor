<script lang="ts" setup>
import { X } from "lucide-vue-next";

const title = ref(`RHB Bank – Hire Purchase & Islamic Financing System`);
const category = ref("Enterprise Banking System");
const company = ref("Microlink Solutions Berhad");
const year = ref("2025 - Present");

const overview = ref(`At Microlink Solutions Berhad, I develop, enhance and maintain modules of the RHB Bank
core hire purchase (HP) and Islamic financing (IF) system on the bank's core platform. The work spans an ASP.NET
Web Forms front-end, C# middleware, Java host programs, Pro*C batch programs and an Oracle database. I design
technical solutions for the bank's change requests, document them in Engineering Design Documents (EDD), and
support defects through SIT, UAT and production, following the bank's change-control conventions.`);

const tech = ref([
  { label: "Front-end", value: "ASP.NET Web Forms, JavaScript" },
  { label: "Middleware", value: "C#/.NET" },
  { label: "Host Programs", value: "Java" },
  { label: "Batch Processing", value: "Pro*C" },
  { label: "Database", value: "Oracle SQL" },
  { label: "Tools", value: "Git, Mantis, GDB" },
]);

const highlights = ref([
  {
    title: "Agreement Documents & E-Signature",
    points: [
      "Enhanced the Hire Purchase Agreement (HPA) document generation and mail merge pipeline (merged PDF and printing) for HP and IF flows, with per-document PDF password protection.",
      "Delivered e-signature business rules from the bank's change requests, including a manual (wet ink) signing fallback across guarantors, standing instruction (SI) consent flows and document listing on preview screens.",
      "Added signature display rules for the marketing officer and each guarantor on agreement documents, and reviewed MyKad biometric verification logic.",
      "Traced and fixed document printing issues where a missing front-end option override and a skipped sequence assignment in the data access layer caused missing transaction data.",
    ],
  },
  {
    title: "API & Integration",
    points: [
      "Developed a hire purchase account inquiry JSON API for a national open finance initiative, exposed through the bank's API middleware, with a new Java host program covering hire purchase and floor stock accounts.",
      "Added a maintenance screen for the API key, stored in the database instead of configuration files.",
      "Prepared the Engineering Design Document (EDD) for the API change request.",
      "Aligned API responses with existing REST service conventions, with request security and encryption handled at the bank's API gateway.",
    ],
  },
  {
    title: "Batch Processing, Database & Support",
    points: [
      "Debugged and fixed Pro*C batch programs that generate Basel / BNM regulatory output files, using GDB, and wrote Oracle SQL for data extraction and correction.",
      "Fixed missing columns in a batch SQL cursor that produced null values in data warehouse output, and resolved truncated output caused by a stale compiled binary.",
      "Resolved runtime errors in post-submit and document preparation flows (null reference, out-of-range, date format and missing directory errors) by adding guard checks.",
      "Traced defects across JavaScript, C# and Java layers, following the bank's change-control conventions with tagged code changes and traceable revision history.",
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
          Screenshots are not shown because this is a confidential client banking system.
        </p>
      </div>
    </div>
  </Layout>
</template>
