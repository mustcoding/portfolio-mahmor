<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <Tabs default-value="skills" class="w-full">
    <TabsList class="gap-5">
      <TabsTrigger value="skills"> Skills </TabsTrigger>
      <TabsTrigger value="experience"> Experience </TabsTrigger>
      <TabsTrigger value="education"> Education </TabsTrigger>
    </TabsList>
    <TabsContent value="skills" class="text-white">
      <AboutBackgroundSkills />
    </TabsContent>
    <TabsContent value="experience" class="text-white">
      <AboutBackgroundExperience />
    </TabsContent>
    <TabsContent value="education" class="text-white">
      <AboutBackgroundEducation />
    </TabsContent>
  </Tabs>
</template>
