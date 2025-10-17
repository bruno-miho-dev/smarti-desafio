<template>
  <div
    class="flex flex-col items-center justify-center bg-gray-50 text-center w-full min-h-screen absolute top-0"
  >
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
      Bem-vindo à Smarti Store!
    </h1>
    <p class="text-gray-600 mb-8">
      Explore nosso catálogo de produtos e adicione ao seu carrinho com
      facilidade.
    </p>

    <NuxtLink
      to="/produtos"
      class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
    >
      Ver Produtos
    </NuxtLink>

    <p class="mt-6 text-gray-500 text-sm">
      Já adicionou itens?
      <NuxtLink to="/carrinho" class="text-yellow-600 hover:underline"
        >Ir para o carrinho</NuxtLink
      >
    </p>
  </div>
</template>
