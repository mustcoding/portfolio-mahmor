<template>
  <div>
    <NuxtLoadingIndicator 
      class="!opacity-100"
      color="repeating-linear-gradient(to right, #FACC14 0%, #1E3B8A 80%, #1E3B8A 100%)"
      :throttle="0"
    />
    <NuxtPage />
    <Toaster/>
  </div>
</template>
