<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-6">Catálogo de Produtos</h1>

    <!-- Loading -->
    <div v-if="loading" class="text-center py-20 text-gray-500">
      Carregando produtos...
    </div>

    <div v-else-if="error" class="text-center py-20 text-red-500">
      {{ error }}
    </div>

    <!-- Lista de produtos -->
    <div
      v-else
      class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded-lg p-4 bg-white shadow flex flex-col items-center text-center w-full max-w-xs"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-40 h-40 object-contain mb-3"
        />
        <h2 class="font-semibold text-gray-800 mb-2">{{ product.title }}</h2>
        <p class="text-lg font-bold text-green-600">
          R$ {{ product.price.toFixed(2).replace(".", ",") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProducts } from "@/composables/useProducts";
import { useCart } from "@/composables/useCart";
const cart = useCart();

const { products, loading, error, fetchProducts } = useProducts();

const addToCart = (product: Product) => {
  cart.add(product);
  // Opcional: navegar para /carrinho
  router.push("/carrinho");
};

onMounted(() => {
  fetchProducts();
});
</script>
