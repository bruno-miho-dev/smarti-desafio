<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-6">Carrinho</h1>

    <div v-if="cart.length === 0" class="text-center text-gray-500">
      Carrinho vazio
    </div>

    <div v-else>
      <div
        v-for="item in cart"
        :key="item.id"
        class="flex justify-between items-center mb-4"
      >
        <div class="flex items-center gap-4">
          <img :src="item.image" class="w-20 h-20 object-contain" />
          <div>
            <p class="font-semibold">{{ item.title }}</p>
            <p>R$ {{ item.price.toFixed(2).replace(".", ",") }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
          <button @click="remove(item.id)" class="text-red-500">Remover</button>
        </div>
      </div>

      <div class="mt-6 text-right font-bold">
        Total ({{ totalItems }} itens): R$
        {{ totalPrice.toFixed(2).replace(".", ",") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "@/composables/useCart";
const { cart, remove, updateQuantity, totalItems, totalPrice } = useCart();
</script>
