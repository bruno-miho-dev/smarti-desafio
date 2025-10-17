# Desafio Técnico - Smarti Store

Aplicação desenvolvida em **Nuxt 4 + Vue 3 + Pinia + TailwindCSS** que simula um **Catálogo de Produtos com Carrinho de Compras**, consumindo a API pública [FakeStore API](https://fakestoreapi.com/products).

---

## Funcionalidades

### Requisitos obrigatórios implementados:

- Listagem de produtos com **imagem, título e preço**.
- **Adicionar e remover produtos do carrinho**.
- **Atualização em tempo real do total de itens e valor total do carrinho**.
- Controle de estado global utilizando **Pinia**.
- Rotas básicas implementadas:
  - `/produtos` → Listagem de produtos
  - `/carrinho` → Carrinho de compras
- Utilização da **Composition API**.
- **Boas práticas de componentização** e layout responsivo.

### Diferenciais implementados:

- **Filtro por categoria**.
- **Busca por nome**.
- Persistência do carrinho no **localStorage**.
- **Exibição da avaliação (rating) em estrelas** e quantidade de avaliações.
- Atualização dinâmica do carrinho sem precisar navegar entre páginas.

---

## Tecnologias utilizadas

- [Nuxt 4](https://nuxt.com) – Meta-framework Vue 3
- [Vue 3](https://vuejs.org) – Framework JavaScript
- [Pinia](https://pinia.vuejs.org) – Gerenciamento de estado global
- [TailwindCSS](https://tailwindcss.com) – Estilização rápida e responsiva
- [FakeStore API](https://fakestoreapi.com/products) – API pública para produtos
- Font Awesome – Ícones de estrelas para rating

---

## Estrutura do projeto

```
.
├── components
│   ├── HeaderApp.vue
│   └── ProductList.vue
├── composables
│   └── useCart.ts
├── pages
│   ├── produtos.vue
│   └── carrinho.vue
├── stores
│   └── cartStore.ts
├── assets
│   └── (imagens, ícones)
├── nuxt.config.ts
└── README.md
```

---

## Como rodar o projeto

1. **Instalar dependências**
```bash
npm install
# ou
yarn install
```

2. **Rodar a aplicação em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

3. Abra o navegador em `http://localhost:3000/produtos`  

---

## Observações

- O carrinho é persistido no `localStorage`, então ao atualizar a página, os itens permanecem.
- Ao adicionar um produto na página de produtos, você é redirecionado automaticamente para o carrinho.
- O total de itens e valor total do carrinho é atualizado **imediatamente** ao alterar quantidade ou remover produtos.

---

## Próximos passos/diferenciais não implementados

- Testes unitários dos componentes.
- Filtros avançados por preço ou múltiplas categorias.
- Checkout real com integração de pagamento.
