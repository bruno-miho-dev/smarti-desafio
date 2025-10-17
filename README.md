# 🛍️ Smarti Desafio - Loja de Produtos (Nuxt 4 + Pinia)

Este projeto foi desenvolvido como parte do desafio técnico da **Smarti**, com o objetivo de criar uma aplicação de e-commerce simples utilizando **Nuxt 4**, **Composition API** e **Pinia** para gerenciamento de estado.

---

## 🚀 Tecnologias Utilizadas

- [Nuxt 4](https://nuxt.com/)
- [Vue 3 - Composition API](https://vuejs.org/guide/introduction.html)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) (para testes unitários)

---

## 📋 Funcionalidades

### ✅ Requisitos Obrigatórios

- [x] Listar produtos com **imagem**, **título** e **preço**
- [x] **Adicionar e remover** produtos do carrinho
- [x] Exibir **total de itens** e **valor total** do carrinho
- [x] Utilizar **Pinia** como controle de estado global
- [x] Implementar rotas básicas:
  - `/produtos` → listagem de produtos
  - `/carrinho` → visualização e controle do carrinho
- [x] Uso da **Composition API**
- [x] Boas práticas de **componentização** e **responsividade**

### ⭐ Diferenciais Implementados

- [x] **Filtro por categoria**
- [x] **Busca por nome**
- [x] **Persistência de dados no localStorage**
- [x] **Testes unitários** (store de carrinho)

---

## 🧩 Estrutura do Projeto

```
src/
├── components/
│   ├── HeaderApp.vue
│   ├── ProductCard.vue
│   ├── ProductList.vue
│
│
├── composables/
│   ├── useProducts.ts
│   └── useCart.ts
│
├── stores/
│   └── cartStore.ts
│
├── pages/
│   ├── produtos.vue
│   └── carrinho.vue
│   └── index.vue
│
└── tests/
    └── cartStore.test.ts
```

---

## 🧠 Fluxo Principal

1. A listagem de produtos é carregada via `useProducts.ts` a partir da API pública `https://fakestoreapi.com/products`.
2. O usuário pode filtrar produtos por **categoria** ou **nome**.
3. Ao clicar em **“Adicionar ao carrinho”**, o item é salvo globalmente via **Pinia**.
4. O carrinho é persistido no `localStorage`, garantindo que os dados permaneçam após o reload.
5. O **Header** exibe a quantidade total e o valor em tempo real.

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/smarti-desafio.git
cd smarti-desafio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em:

> http://localhost:3000/

---

## 🧪 Testes Unitários

Os testes foram feitos utilizando **Vitest** e garantem o funcionamento correto da store global de carrinho (`cartStore`).

### Executar todos os testes:

```bash
npx vitest
```

### Executar com interface visual:

```bash
npx vitest --ui
```

### Estrutura de Teste:

- `tests/cartStore.test.ts`
  - Adicionar produtos
  - Remover produtos
  - Atualizar quantidades

---

## 👨‍💻 Autor

**Bruno Miho**  
Desenvolvido como parte do desafio técnico para a **Smarti**  
📧 [bruno.miho.dev@gmail.com]  
🔗 [LinkedIn](https://www.linkedin.com/in/brunomiho/)

---

### 🏁 Status

✅ Projeto finalizado com todos os requisitos obrigatórios e diferenciais implementados com **Nuxt 4**.
