<template>
  <BackgroundColorBackground>
    <div class="bg-black text-foreground flex-1 overflow-y-auto max-h-screen">
      <span
        class="bg-black flex items-center gap-4 px-4 h-[72px] lg:px-6 sticky top-0 z-10 w-full"
      >
        <Header />
      </span>
      <main class="flex flex-1 flex-col gap-4 p-4 w-auto lg:w-auto">
        <slot></slot>
      </main>
    </div>
  </BackgroundColorBackground>
</template>
