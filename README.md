# PodCast Dio API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## 📖 Sobre o Projeto

API desenvolvida como parte de um desafio de projeto da [Digital Innovation One (DIO)](https://www.dio.me/). O objetivo é fornecer endpoints para consultar e filtrar episódios de podcasts, lendo os dados a partir de um arquivo `JSON` local.

Este projeto demonstra habilidades em criação de APIs RESTful com Node.js, utilizando TypeScript para garantir um código mais robusto e escalável.

---

## ✨ Funcionalidades

-   [ ] **Listagem de Episódios**: Retorna todos os episódios de podcasts disponíveis.
-   [ ] **Filtragem de Episódios**: Permite filtrar episódios pelo nome do podcast através de query parameters.
-   [ ] **Estrutura Organizada**: O código é dividido em camadas de responsabilidade (rotas, controllers/handlers, serviços e repositórios).

---

## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

-   **[Node.js](https://nodejs.org/en/)**: Ambiente de execução para o JavaScript no servidor.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
-   **[ts-node-dev](https://github.com/wclr/ts-node-dev)**: Ferramenta para executar o projeto em modo de desenvolvimento com hot-reloading.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
-   [Git](https://git-scm.com/) (para clonar o repositório)
-   Um gerenciador de pacotes como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Clonando o Repositório

```bash
git clone [https://github.com/isaacbrds/podCast-dio-api.git](https://github.com/isaacbrds/podCast-dio-api.git)
cd podCast-dio-api
```

### Instalando as Dependências

```bash
# Se você usa NPM
npm install

# Se você usa Yarn
yarn install
```

### Executando a Aplicação

```bash
# Para iniciar o servidor em modo de desenvolvimento
npm run start

# Para iniciar o servidor em modo de produção (se configurado)
npm start
```

Após executar, a API estará disponível em `http://localhost:3333` (ou a porta que você configurou).

---

## 🔌 Endpoints da API

A API possui os seguintes endpoints:

#### `GET /api/list`

-   Retorna uma lista com todos os episódios de podcast.
-   **Query Parameter (Opcional)**: `?p=<nome-do-podcast>`
    -   Filtra os episódios pelo nome do podcast informado. O nome deve ser codificado para URL (ex: `The%20Daily`).
-   **Exemplos de uso:**
    -   `http://localhost:3333/api/list` - Retorna todos os episódios.
    -   `http://localhost:3333/api/filter?p=Flow` - Retorna apenas episódios do Flow Podcast.

-   **Resposta de Sucesso (200 OK):**

```json
{
  {
    "podcastName": "The Daily",
    "episode": "The Supreme Court’s New Term",
    "podcastUrl": "https://www.nytimes.com/2023/10/02/podcasts/the-daily/supreme-court-new-term.html",
    "podcastImage": "https://static01.nyt.com/images/2018/10/30/podcasts/the-daily-logo/the-daily-logo-thumbLarge.png"
  },
  {
    "podcastName": "The Daily",
    "episode": "The Supreme Court’s New Term",
    "podcastUrl": "https://www.nytimes.com/2023/10/02/podcasts/the-daily/supreme-court-new-term.html",
    "podcastImage": "https://static01.nyt.com/images/2018/10/30/podcasts/the-daily-logo/the-daily-logo-thumbLarge.png"
  },
  {
    "podcastName": "Flow",
    "episode": "The floe",
    "podcastUrl": "https://flowpodcast.com/episodes/the-flow",
    "podcastImage": "https://flowpodcast.com/episodes/the-flow/image.jpg"
  }
  ]
}
```

---

## 👨‍💻 Autor

Feito com ❤️ por **Isaac Brigido**.
---
