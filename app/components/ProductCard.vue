<!-- components/ProductCard.vue -->
<template>
  <div
    class="border rounded-lg p-4 bg-white shadow hover:shadow-md transition flex flex-col items-center text-center w-full max-w-xs"
  >
    <img
      loading="lazy"
      :src="product.image"
      :alt="product.title"
      class="w-36 h-36 object-contain mb-3"
    />
    <h3 class="font-semibold text-gray-800 mb-1 line-clamp-2">
      {{ product.title }}
    </h3>

    <!-- rating -->
    <div class="flex items-center gap-1 mb-2">
      <span v-for="star in 5" :key="star" class="text-sm" aria-hidden>
        <span
          v-if="star <= Math.round(product.rating.rate)"
          class="text-yellow-400"
          >★</span
        >
        <span v-else class="text-gray-300">★</span>
      </span>
      <span class="text-xs text-gray-500 ml-2"
        >({{ product.rating.count }})</span
      >
    </div>

    <div class="mb-3 text-lg font-bold text-green-600">
      {{ formatPrice(product.price) }}
    </div>

    <slot name="actions">
      <button
        @click="$emit('add', product)"
        class="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded transition"
      >
        Adicionar ao carrinho
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/composables/useProducts";
import { defineProps } from "vue";

const props = defineProps<{ product: Product }>();

const formatPrice = (v: number) => {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
</script>

<style scoped>
/* line-clamp fallback if tailwind plugin not present */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
