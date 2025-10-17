import { ref, computed, watch } from "vue";
import type { Product } from "./useProducts";

interface CartItem extends Product {
  quantity: number;
}

export function useCart() {
  const cart = ref<CartItem[]>([]);

  // Carregar do localStorage ao iniciar
  if (process.client) {
    const stored = localStorage.getItem("cart");
    if (stored) cart.value = JSON.parse(stored);
  }

  // Salvar automaticamente no localStorage quando cart mudar
  watch(
    cart,
    (newVal) => {
      if (process.client) localStorage.setItem("cart", JSON.stringify(newVal));
    },
    { deep: true }
  );

  // Adicionar produto
  const add = (product: Product) => {
    const item = cart.value.find((p) => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  // Remover produto
  const remove = (productId: number) => {
    cart.value = cart.value.filter((p) => p.id !== productId);
  };

  // Alterar quantidade
  const updateQuantity = (productId: number, qty: number) => {
    const item = cart.value.find((p) => p.id === productId);
    if (item) item.quantity = qty;
    // Remove se a quantidade for 0
    cart.value = cart.value.filter((p) => p.quantity > 0);
  };

  // Total de itens
  const totalItems = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Total do valor
  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity * item.price, 0)
  );

  return { cart, add, remove, updateQuantity, totalItems, totalPrice };
}
