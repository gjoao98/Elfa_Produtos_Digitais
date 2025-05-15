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

## ⚙️ Configuração via .env
O projeto utiliza variáveis de ambiente para facilitar a configuração das portas e URLs, tanto no frontend quanto no backend.
Cada pasta (frontend/ e backend/) contém um arquivo .env.example com os valores esperados.

### 🔐 Como configurar
- Faça uma cópia do arquivo .env.example em cada pasta e defina as variáveis necessárias para o projeto, como está no .env de exemplo:
- backend/.env
- frontend/.env

**Obs:** As variáveis de ambiente são opcionais.
Caso não estejam definidas, o código já usa valores padrão embutidos (3000 para o backend, 4000 para o frontend) para garantir que tudo funcione normalmente.

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
#### O frontend ficará disponível em: http://localhost:4000

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
- Acesse http://localhost:4000
- Use o campo de busca para filtrar produtos
- Clique em "Cadastrar Produto" e crie um novo
- O produto será salvo no backend (data/products.json) e listado automaticamente

### 📦 Dados de exemplo
#### Produtos (products.json)
- Dipirona, Paracetamol, Ibuprofeno, Álcool em gel etc.

#### Marcas (brands.json)
- Neo Química, Medley, Clear, Nivea

### 🧑‍💻 Desenvolvido por Gabriel João