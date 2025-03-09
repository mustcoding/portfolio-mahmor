<script lang="ts" setup>
import { Linkedin, Github, Instagram } from "lucide-vue-next";
const config = useRuntimeConfig();
const basePath = config.app.baseURL || "";
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/portfolio-mahmor/document/resume.pdf";
  link.download = "Mahmor_Mustapa_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const openGitHub = () => {
  window.open("https://github.com/mustcoding?tab=repositories", "_blank");
};

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/mahmor-mustapa-b029811b4/", "_blank");
};
</script>

<template>
  <Layout>
    <div class="flex flex-col h-screen mt-10 gap-4 place-items-center w-full">
      <div class="text-center text-white">
        <h1 class="text-xl">MAIN INFO</h1>
        <h1 class="font-bold text-3xl">ABOUT ME</h1>
      </div>
      <div class="space-y-10 lg:grid grid-cols-2 place-items-center p-10">
        <!-- Avatar -->
        <div class="flex flex-col gap-5 justify-center items-center">
          <Avatar
            class="w-52 h-52 mt-10 md:w-96 md:h-96 shadow-[0_0_10px_rgba(255,223,0,0.8)]"
          >
            <AvatarImage
              :src="`${basePath}/image/mahmor.jpg`"
              alt="@unovue"
              class="object-cover rounded-full"
            />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div class="flex justify-center gap-5">
            <Button @click="openGitHub()" class="rounded-full">
              <Github class="w-6 h-6 text-white stroke-current" />
            </Button>
            <Button @click="openLinkedIn()" class="rounded-full">
              <Linkedin class="w-6 h-6 text-white stroke-current" />
            </Button>
          </div>
        </div>
        <div class="flex flex-col gap-5 justify-center items-center">
          <AboutMe />
          <div class="flex justify-between gap-5">
            <Button class="rounded-lg" @click="downloadResume()">Download Resume</Button>
            <Button class="rounded-lg" @click="navigateTo('/mahmor-mustapa/contact')">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <AboutBackgroundMe class="w-full md:p-10" />
    </div>
  </Layout>
</template>
