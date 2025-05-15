# Elfa Produtos Digitais — Desafio Técnico

Este repositório contém a solução completa para o desafio técnico da **Elfa Produtos Digitais**, com frontend em **React + TypeScript** e backend em **Node.js + TypeScript**, utilizando arquivos `.json` como banco de dados.

## 🚀 Como rodar o projeto completo

### 1. Clone o repositório

```bash
git clone https://github.com/gjoao98/Elfa_Produtos_Digitais
cd Elfa_Produtos_Digitais
```

## 📁 Estrutura do Projeto
```bash
Elfa_Produtos_Digitais/
├── backend/ → API REST em Node.js + JSON como banco
├── frontend/ → Aplicação React com listagem e cadastro
└── README.md → Instruções gerais
```
### Instale e inicie a API
```bash
cd backend
npm install
npm run dev
```
#### A API ficará disponível em: http://localhost:3000

### Instale e inicie a aplicação WEB
```bash
cd frontend
npm install
npm run dev
```
#### O frontend ficará disponível em: http://localhost:5173

## 🌐 Funcionalidades
### ✅ Frontend
- Listagem de produtos em grid responsivo
- Filtro por nome ou marca com debounce
- Cadastro com validação (zod) e preview de imagem
- Integração completa com a API

### ✅ Backend
- GET /products?name=... → filtro por nome ou marca
- POST /products → criação com persistência em products.json
- GET /brands → consulta das marcas cadastradas na tela de cadastro de produtos
- Dados armazenados em disco (/data/*.json)

### 🧪 Teste rápido
- Acesse http://localhost:5173
- Use o campo de busca para filtrar produtos
- Clique em "Cadastrar Produto" e crie um novo
- O produto será salvo no backend (data/products.json) e listado automaticamente

### 📦 Dados de exemplo
#### Produtos (products.json)
- Dipirona, Paracetamol, Ibuprofeno, Álcool em gel etc.

#### Marcas (brands.json)
- Neo Química, Medley, Clear, Nivea

### 🧑‍💻 Desenvolvido por Gabriel João