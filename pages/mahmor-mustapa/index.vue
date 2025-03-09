<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<template>
  <Layout>
    <div class="space-y-16 lg:grid grid-cols-2 place-items-center h-screen">
      <!-- Avatar -->
      <div>
        <Avatar
          class="w-52 h-52 mt-10 md:w-96 md:h-96 drop-shadow-[0_0_10px_rgba(255,223,0,0.8)]"
        >
          <AvatarImage src="/image/mahmor.jpg" alt="@unovue" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </div>
      <!-- Text -->
      <div class="text-center">
        <p
          class="text-yellow-600 text-4xl font-bold font-poppins text-shadow typing-text"
        >
          Hello,
        </p>
        <h1 class="text-yellow-600 text-4xl md:text-5xl font-bold">I'm Mahmor Mustapa</h1>
        <p class="text-yellow-600 text-2xl mt-2">Full-stack Software Developer</p>
      </div>
    </div>
  </Layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(201, 108, 15, 0.5);
}

@keyframes typing {
  0% {
    width: 0;
  }
  50% {
    width: 30%;
  }
  100% {
    width: 0;
  }
}

.typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid yellow; /* Simulating a cursor */
  width: 0;
  animation: typing 4s steps(10, end) infinite, blink 0.7s infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
