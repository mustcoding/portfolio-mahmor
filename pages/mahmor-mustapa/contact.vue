<script lang="ts" setup>
import { Phone, MessageCircle, Mail, MapPinHouse } from "lucide-vue-next";

const data = [
  { icon: Phone, name: "Phone", text: "011-15009757" },
  { icon: MessageCircle, name: "Whatsapp", text: "https://wa.me/" },
  { icon: Mail, name: "Email", text: "mahmormust@gmail.com" },
  { icon: MapPinHouse, name: "Address", text: "Batu Pahat, Johor" },
];

const handleClick = (item: { name: string; text: string }) => {
  if (item.name === "Whatsapp") {
    const path = `${item.text}601115009757`;
    window.open(path, "_blank");
  }

  if (item.name === "Email") {
    const email = item.text;
    const subject = encodeURIComponent("Hello!");
    const body = encodeURIComponent("Hi, I'd like to get in touch with you.");

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
};
</script>

<template>
  <Layout>
    <div class="flex flex-col h-screen mt-10 gap-4 place-items-center w-full">
      <div class="text-center text-white">
        <h1 class="text-xl">CONTACT</h1>
        <h1 class="font-bold text-3xl">GET IN TOUCH</h1>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 place-items-center p-10 gap-4 w-full"
      >
        <Card
          class="bg-yellow-600 border border-yellow-800 w-full h-60 sm:w-90 flex flex-col justify-center items-center text-center"
          v-for="data in data"
          :key="data.name"
          :class="{
            'cursor-pointer hover:opacity-80': data.name === 'Whatsapp' || 'Email',
          }"
          @click="handleClick(data)"
        >
          <CardHeader
            class="flex flex-col justify-center items-center text-center gap-10"
          >
            <CardTitle>
              <div
                class="rounded-full border border-black w-16 h-16 flex items-center justify-center"
              >
                <component :is="data.icon" class="items-center"></component>
              </div>
            </CardTitle>
            <CardDescription class="text-xl text-black font-medium">{{
              data.name
            }}</CardDescription>
          </CardHeader>
          <CardContent v-if="data.name == 'Phone' || data.name == 'Address'">
            {{ data.text }}
          </CardContent>
        </Card>
      </div>
    </div>
  </Layout>
</template>
