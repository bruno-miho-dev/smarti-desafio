<!-- layouts/default.vue -->
<template>
  <div>
    <HeaderApp />
    <main class="pt-14">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp.vue";
</script>
