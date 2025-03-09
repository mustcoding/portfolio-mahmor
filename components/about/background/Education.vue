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
    year: "Sept, 2021 - Mar, 2025",
    university: "Universiti Teknikal Malaysia Melaka (UTeM)",
    course: "Bachelor's of Computer Science (Software Development) with Honours",
    CGPA: "3.65",
    image: "../image/utem.jpeg",
    description: [
      "Dean's Award Recipient (5 consecutive semesters 3-7)",
      "Gold Medalist for Workshop II Innovation Competition (MelakaGo)",
      "Microsoft Certified Power BI Data Analyst Associate",
      "Google Cloud Computing Badges Holder",
      "Facilitator Experience",
    ],
    sub_description: [
      "Micro:bit Workshop at SK Durian Tunggal (Sept, 2024)",
      "Micro:bit Workshop at SK Tanjung Minyak (Aug, 2024)",
      "Helping Class Workshop 1 (Oct, 2023 & Mar, 2023)",
      "Scratch for STEM Week at MRSM Muar (June, 2023)",
    ],
  },

  {
    step: 2,
    year: "May, 2019 - May, 2021",
    university: "Kolej Matrikulasi Johor",
    course: "Science Module III",
    image: "../image/kmj.jpeg",
    CGPA: "3.83",
    description: [],
    sub_description: [],
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
          :class="[
            'absolute left-[36px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full',
            '!bg-white',
          ]"
        />

        <StepperTrigger as-child>
          <Button
            size="icon"
            class="z-10 rounded-full shrink-0 w-20 h-20 pointer-event-none"
            :class="['ring-2 ring-ring ring-offset-2 ring-offset-background']"
          >
            <img
              :src="step.image"
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
              <h1 class="text-white font-bold text-lg">{{ step.course }}</h1>
              <h1 class="text-white font-medium">{{ step.university }}</h1>
              <h1 class="text-white font-medium">{{ "CGPA : " + step.CGPA }}</h1>
            </div>
          </StepperTitle>
          <StepperDescription
            :class="[state === 'active' && 'text-primary']"
            class="text-xs text-muted-foreground transition lg:text-sm text-justify"
          >
            <ol class="text-white list-decimal ml-4 space-y-1">
              <li v-for="(item, index) in step.description" :key="index">
                {{ item }}
              </li>
            </ol>
            <ul class="ml-8 text-white list-disc mt-2 space-y-1">
              <li v-for="sub_description in step.sub_description">
                {{ sub_description }}
              </li>
            </ul>
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
  </div>
</template>
