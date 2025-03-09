<script lang="ts" setup>
import { Menu } from "lucide-vue-next";
</script>
<template>
  <header class="gap-4 sticky top-0 z-10 w-full px-4 p-2">
    <div class="hidden md:flex space-x-3 justify-center items-center">
      <Button @click="navigateTo('/')" class="drop-shadow-[0_0_2px_rgba(255,223,0,0.8)]"
        >Home</Button
      >
      <Button
        @click="navigateTo('/mahmor-mustapa/aboutMe')"
        class="drop-shadow-[0_0_2px_rgba(255,223,0,0.8)]"
        >About Me</Button
      >
      <Button
        @click="navigateTo('/mahmor-mustapa/interest')"
        class="drop-shadow-[0_0_2px_rgba(255,223,0,0.8)]"
        >Interest</Button
      >
      <Button
        @click="navigateTo('/mahmor-mustapa/portfolio')"
        class="drop-shadow-[0_0_2px_rgba(255,223,0,0.8)]"
        >Portfolio</Button
      >
      <Button
        @click="navigateTo('/mahmor-mustapa/contact')"
        class="drop-shadow-[0_0_2px_rgba(255,223,0,0.8)]"
        >Contact</Button
      >
    </div>
    <div class="md:hidden flex justify-end">
      <Sheet>
        <SheetTrigger><Menu class="text-white" /></SheetTrigger>
        <SheetContent class="bg-gray-800">
          <SheetHeader class="mt-10">
            <Button @click="navigateTo('/')">Home</Button>
            <Button @click="navigateTo('/mahmor-mustapa/aboutMe')">About Me</Button>
            <Button @click="navigateTo('/mahmor-mustapa/interest')">Interest</Button>
            <Button @click="navigateTo('/mahmor-mustapa/portfolio')">Portfolio</Button>
            <Button @click="navigateTo('/mahmor-mustapa/contact')">Contact</Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
