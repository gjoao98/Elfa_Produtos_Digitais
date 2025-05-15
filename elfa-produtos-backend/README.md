# Elfa Produtos Digitais — Backend

Este projeto é a **API REST** para o desafio técnico da Elfa Produtos Digitais. Os dados são armazenados em arquivos `.json`, facilitando a visualização, versionamento e testes locais.

## ⚙️ Tecnologias utilizadas

- Node.js + TypeScript
- Axios
- Express
- Cors
- UUID
- Banco de dados: arquivos `.json`

## ▶️ Como rodar o backend

### 1. Acesse a pasta do backend

```bash
cd backend
npm install
npm run dev
```

## 📦 Endpoints disponíveis
### GET /products
- Retorna todos os produtos
- Permite filtro via query param: ?name=...
- Realiza filtro por nome ou marca (parcial e case-insensitive)

### POST /products
- Cria um novo produto
- Campos obrigatórios: name, price, brandId

### Json exemplo para request do Post
```bash
{
  "name": "Dipirona",
  "price": 9.5,
  "description": "Analgésico",
  "image": "https://drogariavenancio.vtexassets.com/arquivos/ids/1097494/6204_z.jpg?v=638392238837270000",
  "brandId": "b1"
}
```

### GET /brands
- Retorna todas as marcas disponíveis
- Usado no cadastro de produtos para retornar as marcas existentes

## 🗂️ Estrutura do Projeto

```bash
src/
├── data/
│   └── brands.json
│   ├── products.json
├── routes/
│   └── brands.ts
│   ├── products.ts
├── app.ts
└── server.ts
```

### 🧑‍💻 Desenvolvido por Gabriel João