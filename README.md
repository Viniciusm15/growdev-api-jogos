# API de Jogos e Personagens 🎮

API REST desenvolvida para cadastro e gerenciamento de jogos e seus respectivos personagens. Cada jogo pode conter múltiplos personagens, mas cada personagem pertence exclusivamente a um único jogo.

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio prático para consolidar conhecimentos em desenvolvimento de APIs com Node.js, TypeScript e Prisma ORM.

---

## 🧱 Modelagem de Dados

### 🎮 Jogo

* `id`
* `nome`
* `preco`
* `tamanho`
* `dtLancamento`
* `createdAt`
* `updatedAt`

Um jogo pode possuir vários personagens.

### 🧙 Personagem

* `id`
* `nome`
* `idade`
* `forca`
* `inteligencia`
* `habilidades`
* `idJogo`
* `createdAt`
* `updatedAt`

Um personagem pertence exclusivamente a um único jogo.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL (Utilizado Prisma Console)
* Postman

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

* Node.js (versão 18 ou superior recomendada)
* npm ou yarn
* PostgreSQL
* Git

---

## 🔧 Instalação e Configuração

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/api-jogos-personagens.git
cd api-jogos-personagens
```

---

### 2️⃣ Instale as dependências

```bash
npm install
```

---

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure sua conexão com o banco de dados.

Exemplo utilizado no projeto:

```env
DATABASE_URL="postgres://f3b9cb6d8461bec7d134127c9847ccdfe40c5a58ccac221e4750869f3d65dbc0:sk_4Hmk0vl1ivCOBYND7BQzg@db.prisma.io:5432/postgres?sslmode=verify-full"
```

---

### 4️⃣ Gerar a pasta `generated` do Prisma

Após configurar o banco, execute:

```bash
npx prisma generate
```

Esse comando gera automaticamente o client do Prisma dentro da pasta `generated`.

---

### 5️⃣ Rodar as migrations (caso existam)

```bash
npx prisma migrate dev
```

---

### 6️⃣ Iniciar o servidor

```bash
npm run dev
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 📬 Documentação da API (Postman)

A documentação completa da API está disponível no Postman:

👉 [https://documenter.getpostman.com/view/22428670/2sBXcKBdK5](https://documenter.getpostman.com/view/22428670/2sBXcKBdK5)

Lá você encontrará:

* Rotas de Jogos
* Rotas de Personagens
* Exemplos de requisição
* Exemplos de resposta

---

## 📌 Estrutura do Projeto

```
src/
 ├── config/
 ├── database/
 ├── models/
 ├── repositories/
 ├── routes/
 └── index.ts
```

---

## 📖 Principais Funcionalidades

* ✅ Criar jogo
* ✅ Listar jogos
* ✅ Atualizar jogo
* ✅ Deletar jogo
* ✅ Criar personagem vinculado a um jogo
* ✅ Listar personagens
* ✅ Atualizar personagem
* ✅ Deletar personagem

---

## 🧠 Observações

* Validação de dados aplicada nos models (DTOs)
* Separação de responsabilidades (routes, repositories, models)
* Uso de TypeScript para tipagem estática
* Prisma como ORM para comunicação com PostgreSQL
