# API de Jogos e Personagens 🎮

API REST desenvolvida para cadastro e gerenciamento de jogos e seus respectivos personagens. Cada jogo pode conter múltiplos personagens, mas cada personagem pertence exclusivamente a um único jogo.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio prático para consolidar conhecimentos em desenvolvimento de APIs com Node.js, TypeScript e PrismaORM.

### Modelagem de Dados

- **Jogo**: possui título, gênero, plataforma, ano de lançamento e pode ter vários personagens
- **Personagem**: possui nome, nível, classe, e está vinculado a um único jogo

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express](https://expressjs.com/) - Framework web para Node.js
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Prisma ORM](https://www.prisma.io/) - ORM para Node.js e TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Postman](https://www.postman.com/) - Ferramenta para testar e documentar APIs

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (local ou via Docker)
- [Git](https://git-scm.com/)

## 🔧 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/api-jogos-personagens.git
cd api-jogos-personagens
