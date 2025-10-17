<template>
  <header
    class="fixed top-0 left-0 w-full bg-white shadow z-50 border-b border-gray-200"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
      <div class="flex items-center gap-4">
        <NuxtLink to="/produtos" class="text-2xl font-bold text-blue-600"
          >🛍️ Smarti Store</NuxtLink
        >
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink to="/produtos" class="text-gray-700 hover:text-blue-600"
          >Produtos</NuxtLink
        >

        <NuxtLink
          to="/carrinho"
          class="relative text-gray-700 hover:text-blue-600"
        >
          Carrinho
          <span
            v-if="count > 0"
            class="absolute -top-2 -right-4 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full"
          >
            {{ count }}
          </span>
        </NuxtLink>

        <div class="text-sm text-gray-600 hidden sm:block">
          {{ formatPrice(total) }}
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore";

// pegar store do carrinho
const cart = useCartStore();

// computed reativos diretamente da store
const count = computed(() => cart.totalItems);
const total = computed(() => cart.totalPrice);

// formatador de moeda
const formatPrice = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
</script>
