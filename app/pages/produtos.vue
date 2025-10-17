<!-- pages/produtos.vue -->
<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold text-center mb-6">Catálogo de Produtos</h1>

    <div
      class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
    >
      <input
        v-model="search"
        type="text"
        placeholder="Buscar produto..."
        class="border rounded px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-yellow-400"
      />
      <select
        v-model="selectedCategory"
        class="border rounded px-4 py-2 w-full sm:w-1/4 focus:ring-2 focus:ring-yellow-400"
      >
        <option value="">Todas as categorias</option>
        <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <div v-if="loading" class="text-center text-gray-500 py-12">
      Carregando produtos...
    </div>
    <div v-else-if="error" class="text-center text-red-500 py-12">
      {{ error }}
    </div>

    <ProductList v-else :products="filteredProducts" @add="onAddToCart" />

    <div
      v-if="!loading && filteredProducts.length === 0"
      class="text-center text-gray-500 mt-8"
    >
      Nenhum produto encontrado.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useProducts } from "@/composables/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";
import ProductList from "@/components/ProductList.vue";

const { products, categories, loading, error, fetchProducts } = useProducts();
const cart = useCartStore();
const router = useRouter();

const search = ref("");
const selectedCategory = ref("");
const localCategories = ref<string[]>([]);

onMounted(async () => {
  await fetchProducts();
  // ensure categories from composable (fallback)
  localCategories.value = categories.value ?? [];
});

// computed list for ProductList
const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(search.value.toLowerCase());
    const matchesCat = selectedCategory.value
      ? p.category === selectedCategory.value
      : true;
    return matchesSearch && matchesCat;
  });
});

const onAddToCart = (product: any) => {
  cart.add(product);
  // optional: small delay for UX
  setTimeout(() => router.push("/carrinho"), 200);
};
</script>
