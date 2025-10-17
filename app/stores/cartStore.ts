// stores/cartStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "@/composables/useProducts";

export type CartItem = Product & { quantity: number };

const STORAGE_KEY = "smarti_cart_v1";

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>([]);

  // carregar do localStorage (somente cliente)
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) items.value = JSON.parse(raw);
    } catch (e) {
      console.error("Falha ao carregar carrinho do localStorage", e);
    }
  }

  const save = () => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
    } catch (e) {
      // silenciar erros de storage
      console.error("Falha ao salvar carrinho", e);
    }
  };

  function add(product: Product, qty = 1) {
    const found = items.value.find((i) => i.id === product.id);
    if (found) {
      found.quantity += qty;
    } else {
      items.value.push({ ...product, quantity: qty });
    }
    save();
  }

  function remove(id: number) {
    items.value = items.value.filter((i) => i.id !== id);
    save();
  }

  function increase(id: number) {
    const it = items.value.find((i) => i.id === id);
    if (it) {
      it.quantity++;
      save();
    }
  }

  function decrease(id: number) {
    const it = items.value.find((i) => i.id === id);
    if (it) {
      if (it.quantity > 1) {
        it.quantity--;
      } else {
        items.value = items.value.filter((i) => i.id !== id);
      }
      save();
    }
  }

  function clear() {
    items.value = [];
    save();
  }

  const totalItems = computed(() =>
    items.value.reduce((s, i) => s + i.quantity, 0)
  );
  const totalPrice = computed(() =>
    items.value.reduce((s, i) => s + i.quantity * i.price, 0)
  );

  return {
    items,
    add,
    remove,
    increase,
    decrease,
    clear,
    totalItems,
    totalPrice,
  };
});
