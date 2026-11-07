<script lang="ts" setup>
import { Landmark, Building2, House, Users, UsersRound } from "lucide-vue-next";
import type { Component } from "vue";

type Project = {
  name: string;
  path: string;
  image_path?: string;
  icon?: Component;
  subtitle?: string;
  role: string;
  summary: string;
};

const data: Project[] = [
  {
    name: "RHB Bank – Hire Purchase & Islamic Financing System",
    icon: Landmark,
    subtitle: "C#/.NET · Java · Pro*C · Oracle SQL",
    role: "Analyst, System Development",
    summary:
      "Core hire purchase and Islamic financing system for RHB Bank. I enhance agreement documents and e-signature rules, built an account inquiry API for a national open finance initiative, and fix Pro*C regulatory batch jobs.",
    path: "/mahmor-mustapa/portfolio/rhb",
  },
  {
    name: "MyINFRA – Kementerian Kerja Raya",
    icon: Building2,
    subtitle: "Laravel · Vue.js · Docker",
    role: "Full-Stack Developer",
    summary:
      "Government immovable asset management system following the TPATA 2024 guidelines. I built two TPATA-based modules on Docker microservices: asset loss and write-off (Hapus Kira) with a 4-stage approval workflow, and asset operation and maintenance planning.",
    path: "/mahmor-mustapa/portfolio/myinfra",
  },
  // Client projects are confidential, so their screenshots are commented out.
  {
    name: "Sistem Perumahan Penjawat Awam Malaysia (PPAM)",
    // image_path: "/portfolio-mahmor/image/ppam/ppam_2.jpg",
    icon: House,
    subtitle: "Laravel · Bootstrap",
    role: "Full-Stack Developer",
    summary:
      "Central online system for the national programme that helps civil servants own homes below market price. I built the Aduan (Complaint) module with email-link tracking for public users, delivered change requests and handled preventive maintenance.",
    path: "/mahmor-mustapa/portfolio/ppam",
  },
  {
    name: "Sistem Ahli KPPPSM",
    // image_path: "/portfolio-mahmor/image/kpppsm/login.jpg",
    icon: Users,
    subtitle: "Vue.js · Tailwind CSS · Shadcn-vue · Laravel",
    role: "Full-Stack Developer",
    summary:
      "Membership system that replaced paper-based processes for a dental surgery assistants union, with membership applications, benefit records and official letters. I developed it from my internship and took full ownership afterwards.",
    path: "/mahmor-mustapa/portfolio/kpppsm",
  },
  {
    name: "Sistem Ahli ANULAE",
    // image_path: "/portfolio-mahmor/image/anulae_new/anulae_1.jpg",
    // image_path: "/portfolio-mahmor/image/anulae/aid_application.jpg",
    icon: UsersRound,
    subtitle: "Vue.js · Tailwind CSS · Shadcn-vue · Laravel",
    role: "Full-Stack Developer",
    summary:
      "Membership management system for ANULAE. I built its first front-end during my internship, then rebuilt the front-end from scratch with Vue.js and Shadcn-vue, integrated Laravel APIs and ran code reviews.",
    path: "/mahmor-mustapa/portfolio/anulae",
  },
  {
    name: "FYP Project",
    image_path: "/portfolio-mahmor/image/fyp/homepage.jpg",
    role: "Final Year Project, UTeM",
    summary:
      "Attendance system combining RFID (Arduino), facial recognition (MTCNN) and digital data entry, with a Laravel web dashboard and a Flutter app for parents to request student leave.",
    path: "/mahmor-mustapa/portfolio/fyp",
  },
  // {
  //   name: "My Portfolio",
  //   image_path: "/portfolio-mahmor/image/myportfolio/main.jpg",
  //   path: "/mahmor-mustapa/portfolio/myportfolio",
  // },
  // {
  //   name: "MelakaGo",
  //   image_path: "/portfolio-mahmor/image/melakago/homepage.jpg",
  //   path: "/mahmor-mustapa/portfolio/workshop",
  // },
];
</script>

<template>
  <Layout>
    <div class="flex flex-col min-h-screen mt-10 mb-10 gap-4 place-items-center w-full">
      <div class="text-center text-white">
        <h1 class="text-xl">PORTFOLIO</h1>
        <h1 class="font-bold text-3xl">MY WORKS</h1>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-stretch p-10 gap-4 w-full"
      >
        <Card
          class="bg-yellow-600 border border-yellow-800 w-full h-full flex flex-col items-center text-center cursor-pointer hover:opacity-80"
          v-for="data in data"
          @click="navigateTo(data.path)"
        >
          <CardHeader class="flex flex-col items-center text-center gap-4 w-full">
            <CardTitle class="w-full">
              <div
                v-if="data.image_path"
                class="border border-black w-full h-auto flex items-center justify-center"
              >
                <img :src="data.image_path" class="w-full" />
              </div>
              <div
                v-else
                class="border border-black w-full aspect-video bg-black flex flex-col gap-4 items-center justify-center text-yellow-500"
              >
                <component :is="data.icon" class="w-16 h-16" />
                <span class="text-sm font-medium px-4">{{ data.subtitle }}</span>
              </div>
            </CardTitle>
            <CardDescription class="text-xl text-black font-semibold">{{
              data.name
            }}</CardDescription>
            <span
              class="rounded-full bg-black px-3 py-1 text-xs font-semibold text-yellow-500"
              >{{ data.role }}</span
            >
            <p class="text-sm text-black text-justify leading-relaxed">
              {{ data.summary }}
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  </Layout>
</template>
