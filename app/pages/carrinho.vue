<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Meu Carrinho</h1>

    <!-- Carrinho vazio -->
    <div v-if="items.length === 0" class="text-center text-gray-500 py-12">
      Seu carrinho está vazio.
      <div class="mt-4">
        <NuxtLink
          to="/produtos"
          class="bg-yellow-500 text-white px-4 py-2 rounded"
          >Ver produtos</NuxtLink
        >
      </div>
    </div>

    <!-- Lista de itens -->
    <div v-else class="space-y-4">
      <div
        v-for="it in items"
        :key="it.id"
        class="flex items-center gap-4 bg-white p-4 rounded shadow"
      >
        <img :src="it.image" class="w-20 h-20 object-contain" alt="" />
        <div class="flex-1">
          <div class="font-semibold">{{ it.title }}</div>
          <div class="text-sm text-gray-500">
            R$ {{ formatPrice(it.price) }}
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button @click="decrease(it.id)" class="px-3 py-1 border rounded">
            -
          </button>
          <div class="w-8 text-center">{{ it.quantity }}</div>
          <button @click="increase(it.id)" class="px-3 py-1 border rounded">
            +
          </button>
        </div>

        <div class="w-28 text-right font-semibold">
          R$ {{ formatPrice(it.quantity * it.price) }}
        </div>

        <button @click="remove(it.id)" class="text-red-500 ml-4">
          Remover
        </button>
      </div>

      <!-- Total e quantidade -->
      <div
        class="bg-gray-50 p-4 rounded flex flex-col sm:flex-row justify-between items-center"
      >
        <div class="text-lg">
          Itens: <strong>{{ totalItems }}</strong>
        </div>
        <div class="text-2xl font-bold text-green-600">
          Total: {{ formatPrice(totalPrice) }}
        </div>
      </div>

      <!-- Ações -->
      <div class="text-right mt-4">
        <button
          @click="clear"
          class="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          Limpar
        </button>
        <button
          @click="checkout"
          class="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

const cart = useCartStore();
const router = useRouter();

// Computeds reativos para atualizar automaticamente
const items = computed(() => cart.items);
const totalItems = computed(() => cart.totalItems);
const totalPrice = computed(() => cart.totalPrice);

// Funções de manipulação
const increase = (id: number) => cart.increase(id);
const decrease = (id: number) => cart.decrease(id);
const remove = (id: number) => cart.remove(id);
const clear = () => cart.clear();

const checkout = () => {
  cart.clear();
  alert("Compra finalizada! Obrigado 😊");
  router.push("/produtos");
};

// Formatador de moeda
const formatPrice = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
</script>
