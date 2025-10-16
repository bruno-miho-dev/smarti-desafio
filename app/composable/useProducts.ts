// Buscar os produtos da API (https://fakestoreapi.com/products)
// Armazenar produtos e categorias em estado reativo
// Controlar carregamento (loading) e erros (error)
// Tornar essa lógica reutilizável em qualquer página

import { ref } from "vue";

export function useProducts() {
  const products = ref<any[]>([]);
  const categories = ref<string[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Faz as duas requisições em paralelo
      const [prodRes, catRes] = await Promise.all([
        fetch("https://fakestoreapi.com/products"),
        fetch("https://fakestoreapi.com/products/categories"),
      ]);

      if (!prodRes.ok || !catRes.ok)
        throw new Error(`Erro HTTP: ${prodRes.status} ou ${catRes.status}`);

      products.value = await prodRes.json();
      categories.value = await catRes.json();
    } catch (err: any) {
      error.value = err?.message ?? "Erro desconhecido";
    } finally {
      loading.value = false;
    }
  };

  return { products, categories, loading, error, fetchProducts };
}
