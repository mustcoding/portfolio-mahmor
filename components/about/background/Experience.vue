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
import { Check, Circle, Dot } from "lucide-vue-next";

const steps = [
  {
    step: 1,
    year: "Oct, 2024 - Mar, 2025",
    title: "Software Developer Intern",
    company: "Alto Soft Sdn. Bhd.",
    description:
      "1) Sistem Ahli KPPPSM (Full-Stack) & Sistem Ahli ANULAE (Front-End) using (Vue.js, Tailwind CSS, Shadcn-Vue, Laravel, Nuxt.js)",
    sub_description: [
      "Contributed to the development of new web application product for Kesatuan Pembantu Pembedahan Pergigian Semalaysia (KPPPSM).",
      "Replaced a traditional paper-based process with an efficient online system.",
      "Designed a modern and mobile-friendly interface using Tailwind CSS.",
      "Integrated Laravel for secure data handling and back-end processing.",
      "Utilized Shadcn-Vue to build reusable and scalable UI components.",
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
              src="/image/altosoft.jpeg"
              alt="Profile"
              class="w-full h-full object-cover rounded-full"
            />
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
            <p class="text-white">{{ step.description }}</p>
            <ul class="text-white list-disc ml-4">
              <li v-for="(item, index) in step.sub_description" :key="index">
                {{ item }}
              </li>
            </ul>
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
  </div>
</template>
