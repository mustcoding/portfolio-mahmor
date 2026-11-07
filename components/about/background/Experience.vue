<script setup lang="ts">
import { Button } from "@/components/ui/button";

import {
  Stepper,
  StepperDescription,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

type Step = {
  step: number;
  year: string;
  title: string;
  company: string;
  image?: string;
  contain?: boolean;
  initials: string;
  points: string[];
};

const steps: Step[] = [
  {
    step: 1,
    year: "October, 2025 - Present",
    title: "Analyst, System Development",
    company: "Microlink Solutions Berhad, Kuala Lumpur",
    image: "/portfolio-mahmor/image/microlink.png",
    contain: true,
    initials: "ML",
    points: [
      "Develop, enhance and maintain modules of the RHB Bank core hire purchase (HP) and Islamic financing (IF) system on the bank's core platform, using C#/.NET, Java, Pro*C, Oracle SQL, ASP.NET Web Forms and JavaScript.",
      "Perform root cause analysis of SIT, UAT and production defects across the ASP.NET front-end, C# middleware and Java host layers through code tracing, debugging and Oracle data validation.",
      "Design technical solutions for change requests and document them in Engineering Design Documents (EDD) and unit test results, with source control in Git and defect tracking in Mantis.",
    ],
  },
  {
    step: 2,
    year: "March, 2025 - September, 2025",
    title: "Junior Software Developer",
    company: "Alto Soft Sdn. Bhd.",
    image: "/portfolio-mahmor/image/altosoft.jpeg",
    initials: "AS",
    points: [
      "Developed and maintained full-stack web application systems for government and association clients using Laravel, Vue.js, Tailwind CSS, Shadcn-vue and Bootstrap.",
      "Built new modules and delivered change requests, including development of two modules for the Kementerian Kerja Raya MyINFRA system in a Docker-based microservices architecture.",
      "Performed preventive maintenance, server monitoring, code reviews and debugging, and logged defects for resolution.",
    ],
  },
  {
    step: 3,
    year: "October, 2024 - March, 2025",
    title: "Software Developer (Intern)",
    company: "Alto Soft Sdn. Bhd.",
    image: "/portfolio-mahmor/image/altosoft.jpeg",
    initials: "AS",
    points: [
      "Contributed to the development of new web systems for two associations, replacing paper-based processes with online systems.",
      "Built mobile-friendly interfaces with Tailwind CSS and reusable Shadcn-vue components.",
      "Integrated Laravel back-end processing for secure data handling.",
    ],
  },
];
</script>

<template>
  <div class="w-full min-h-screen overflow-y-auto">
    <Stepper
      orientation="vertical"
      class="mx-auto flex w-full p-2 md:px-10 flex-col justify-center items-center gap-10 relative mt-14"
    >
      <StepperItem
        v-for="step in steps"
        :key="step.step"
        v-slot="{ state }"
        class="relative flex w-full items-start gap-6"
        :step="step.step"
      >
        <StepperSeparator
          v-if="step.step !== steps[steps.length - 1].step"
          class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
        />

        <StepperTrigger as-child>
          <Button
            :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
            size="icon"
            class="z-10 rounded-full shrink-0 w-20 h-20"
            :class="['ring-2 ring-ring ring-offset-2 ring-offset-background']"
          >
            <img
              v-if="step.image"
              :src="step.image"
              :alt="step.company"
              class="w-full h-full rounded-full"
              :class="step.contain ? 'object-cover bg-white scale-110' : 'object-cover'"
            />
            <span
              v-else
              class="w-full h-full rounded-full bg-yellow-600 text-black text-xl font-bold flex items-center justify-center"
              >{{ step.initials }}</span
            >
          </Button>
        </StepperTrigger>

        <div class="flex flex-col gap-1">
          <StepperTitle
            :class="[state === 'active' && 'text-primary']"
            class="text-sm font-semibold transition lg:text-base"
          >
            <div class="flex flex-col">
              <p class="text-red-400">{{ step.year }}</p>
              <h1 class="text-white font-bold text-lg">{{ step.title }}</h1>
              <h1 class="text-white font-medium">{{ step.company }}</h1>
            </div>
          </StepperTitle>
          <StepperDescription
            :class="[state === 'active' && 'text-primary']"
            class="text-xs text-muted-foreground transition lg:text-sm text-justify"
          >
            <ul class="text-white list-disc ml-4 mt-2 space-y-1">
              <li v-for="(item, index) in step.points" :key="index">
                {{ item }}
              </li>
            </ul>
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
  </div>
</template>
