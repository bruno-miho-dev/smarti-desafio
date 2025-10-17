import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useCartStore } from "../stores/cartStore";

describe("Cart Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("adiciona um item ao carrinho", () => {
    const store = useCartStore();
    store.add({
      id: 1,
      title: "Produto Teste",
      price: 50,
      image: "",
      category: "",
      rating: { rate: 4, count: 10 },
    });
    expect(store.items.length).toBe(1);
    expect(store.totalItems).toBe(1);
    expect(store.totalPrice).toBe(50);
  });

  it("remove um item do carrinho", () => {
    const store = useCartStore();
    store.add({
      id: 1,
      title: "Produto Teste",
      price: 50,
      image: "",
      category: "",
      rating: { rate: 4, count: 10 },
    });
    store.remove(1);
    expect(store.items.length).toBe(0);
    expect(store.totalPrice).toBe(0);
  });

  it("atualiza quantidade corretamente", () => {
    const store = useCartStore();
    const product = {
      id: 2,
      title: "Produto 2",
      price: 30,
      image: "",
      category: "",
      rating: { rate: 3, count: 20 },
    };

    store.add(product);
    store.increase(2);
    store.increase(2);
    store.decrease(2);

    expect(store.items[0].quantity).toBe(2);
    expect(store.totalItems).toBe(2);
    expect(store.totalPrice).toBe(60);
  });
});
