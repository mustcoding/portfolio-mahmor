<script lang="ts" setup>
import { X } from "lucide-vue-next";
const showDetail = ref(false);

const title = ref(
  `Enhance Attendance Tracking System Through Multimodal Integration of 
  Facial Recognition, RFID Technology, and Digital Data Entry (FYP Project)`
);

const category = ref("Web Application, Mobile Application, IoT");

const overview = ref(`This project revolutionizes attendance tracking by integrating RFID technology, 
facial recognition, and digital data entry into a seamless, automated, and secure system tailored for 
educational institutions. The system ensures accurate, real-time attendance monitoring, reducing manual 
effort and minimizing errors. It features a web-based admin panel for teachers and administrators to track 
attendance efficiently, a mobile app for parents to conveniently request student leaves, and an IoT-driven RFID system 
that enables automated student check-ins with high precision. By combining hardware and software, this solution enhances security, 
improves operational efficiency, and provides a modern, tech-driven approach to attendance management. `);

const back_end = ref("Laravel");
const mobile_app = ref("Flutter");
const database = ref("MySQL Workbench");
const web_design = ref(["HTML", "CSS", "Bootstrap"]);
const facial_recognition = ref("MTCNN Library");
const rfid = ref("Arduino");
const api_testing = ref("Postman");
const year = ref("2024");

const url = ref([
  { name: "Web App", path: "https://github.com/mustcoding/SchoolAttendanceWeb_FYP.git" },
  {
    name: "Mobile App",
    path: "https://github.com/mustcoding/school_attendance_system_fyp_apps.git",
  },
  {
    name: "Facial Recognition",
    path: "https://github.com/mustcoding/FacialRecognition_FYP.git",
  },
  {
    name: "Arduino RFID",
    path: "https://github.com/mustcoding/Arduino_AttendanceSystem.git",
  },
]);

const image_path = ref([
  "/portfolio-mahmor/image/fyp/login.jpg",
  "/portfolio-mahmor/image/fyp/homepage.jpg",
  "/portfolio-mahmor/image/fyp/attendance.jpg",
  "/portfolio-mahmor/image/fyp/registration.jpg",
]);
</script>
<template>
  <Layout>
    <div class="flex flex-col min-h-screen gap-10 w-full mb-10">
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
          :overview="overview"
          :mobile_app="mobile_app"
          :back_end="back_end"
          :facial_recognition="facial_recognition"
          :rfid="rfid"
          :database="database"
          :web_design="web_design"
          :api_testing="api_testing"
          :year="year"
          :url="url"
        />
        <hr class="border-t-2 border-white opacity-50" />
      </div>
      <div class="flex justify-center items-center w-full">
        <Card
          class="bg-yellow-600 border border-yellow-800 w-full sm:w-4/5 lg:w-3/5 h-90 flex flex-col justify-center items-center text-center cursor-pointer p-8"
        >
          <CardHeader
            class="flex flex-col justify-center items-center text-center gap-10 w-full"
          >
            <Carousel class="w-full">
              <CarouselContent>
                <CarouselItem
                  v-for="image_path in image_path"
                  :key="image_path"
                  class="flex justify-center item-center w-full"
                >
                  <img :src="image_path" class="rounded-lg w-auto" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardHeader>
        </Card>
      </div>
    </div>
  </Layout>
</template>
