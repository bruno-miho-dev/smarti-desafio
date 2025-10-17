<!-- layouts/default.vue -->
<template>
  <div>
    <HeaderApp />
    <main class="pt-20">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp.vue";
</script>
