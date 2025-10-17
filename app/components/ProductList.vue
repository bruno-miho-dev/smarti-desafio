<!-- components/ProductList.vue -->
<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center"
  >
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      @add="$emit('add', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { Product } from "@/composables/useProducts";
import { defineProps } from "vue";

const props = defineProps<{ products: Product[] }>();
</script>
