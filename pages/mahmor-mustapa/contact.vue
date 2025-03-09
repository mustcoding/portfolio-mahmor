<script setup lang="ts">
import { Progress } from "@/components/ui/progress";
</script>

<template>
  <Progress :model-value="33" />
  <Progress :model-value="73" class="mt-20" />
</template>
