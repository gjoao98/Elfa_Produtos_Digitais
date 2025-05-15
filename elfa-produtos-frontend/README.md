# Elfa Produtos Digitais — Frontend

Este projeto é a aplicação **frontend** do desafio técnico Elfa Produtos Digitais. Ele permite visualizar e cadastrar produtos, consumindo uma API REST desenvolvida em Node.js com banco em arquivos `.json`.

## 🔎 Funcionalidades

- ✅ Listagem de produtos em grid com filtro por nome ou marca simultaneamente
- ✅ Cadastro de produtos com preview de imagem e validação com Zod
- ✅ Integração com backend local via Axios
- ✅ Layout responsivo usando styled-components
- ✅ Navegação com React Router DOM

## 🚀 Tecnologias utilizadas

- React + TypeScript
- styled-components
- React Hook Form + Zod
- Axios
- React Router DOM
- Vite

## ▶️ Como rodar o projeto

### 1. Acesse a pasta do frontend e instale as dependências
```bash
cd frontend
npm install
npm run dev
```

- Acesse: http://localhost:5173
- A API precisa estar rodando em http://localhost:3000

## 🧪 Testar funcionalidades
- Página inicial lista os produtos
- Campo de busca filtra por nome ou marca simultaneamente
- Botão no topo navega para a tela de cadastro ou para tela de listagem dos produtos
- O cadastro envia os dados para a API e retorna para a listagem dos produtos

## 🗂️ Estrutura do Projeto

```bash
src/
├── components/
├── layouts/
├── pages/
│   ├── ProductList/
│   └── CreateProduct/
├── services/
├── styles/
├── Router.tsx
├── main.tsx
└── App.tsx
```

### 🧑‍💻 Desenvolvido por Gabriel João