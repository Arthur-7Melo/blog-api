# Blog API

Esta é uma API backend que simula o funcionamento de um blog. Ela gerencia usuários, autenticação e posts, utilizando um banco de dados PostgreSQL. A API está containerizada com Docker e utiliza o Sequelize para gerenciar o mapeamento objeto-relacional (ORM).

---

## Índice

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Configuração e Execução](#configuração-e-execução)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Licença](#licença)

---

## Recursos

- **Autenticação:**  
  - Registro e login de usuários.
- **Gerenciamento de Posts:**  
  - Criação, atualização e exclusão de posts (rotas protegidas via JWT).
- **Gerenciamento de Usuários:**  
  - Consulta e exclusão de usuários (rotas protegidas via JWT). Ao excluir um usuário, os posts associados são removidos automaticamente (graças à associação com `onDelete: "CASCADE"`).

---

## Tecnologias Utilizadas

- **Node.js** com **Express** – Criação da API.
- **Sequelize** – ORM para interação com o PostgreSQL.
- **PostgreSQL** – Banco de dados relacional.
- **Docker** e **Docker Compose** – Containerização da aplicação e do banco de dados.
- **JWT (JSON Web Tokens)** – Para autenticação e autorização.
- **ES Modules (ESM)** – Utilizando a sintaxe moderna de módulos do JavaScript.

---

## Estrutura do Projeto

- **config**: Arquivo de configuração do banco de dados.
- **controllers**: Lógica de requisições e respostas.
- **middlewares**: Funções de autenticação e autorização.
- **models**: Definição dos modelos e associações (um usuário possui muitos posts e cada post pertence a um usuário).
- **repositories**: Interação direta com o banco de dados (operações CRUD).
- **routes**: Definição das rotas da API.
- **services**: Regras de negócio e validações.
- **utils**: Utilitários como o logger.
- **server.js**: Ponto de entrada da aplicação.

---

## Endpoints da API

### Autenticação

- **POST `/register`**  
  Registra um novo usuário.

- **POST `/login`**  
  Realiza o login e retorna um token JWT.

### Posts (rotas protegidas)

- **POST `/post`**  
  Cria um novo post.  
  _Cabeçalho:_ `Authorization: Bearer <token>`

- **PUT `/post/:id`**  
  Atualiza um post existente.  
  _Cabeçalho:_ `Authorization: Bearer <token>`

- **DELETE `/post/:id`**  
  Exclui um post.  
  _Cabeçalho:_ `Authorization: Bearer <token>`

### Usuários (rotas protegidas)

- **GET `/user/:id`**  
  Retorna os dados de um usuário.  
  _Cabeçalho:_ `Authorization: Bearer <token>`

- **DELETE `/user/:id`**  
  Exclui um usuário e, com o `CASCADE`, remove os posts associados.  
  _Cabeçalho:_ `Authorization: Bearer <token>`

---

## Configuração e Execução

### Pré-requisitos

- **Docker** e **Docker Compose** instalados.
- Variáveis de ambiente configuradas (veja a seção [Variáveis de Ambiente](#variáveis-de-ambiente)).

### Executando

1. **Clone o repositório:**
   ```bash
   git clone <github.com/Arthur-7Melo/blog-api.git>
   cd blog-api
   ```

2. **Configure as variáveis de ambiente:** <br>
   Crie um arquivo `.env` na raiz do projeto (consulte a seção [Variáveis de Ambiente](#variáveis-de-ambiente)).

3. **Inicie os containers:**
   ```bash
    Docker compose up --build
   ```
   **O container da aplicação aguarda 10 segundos para garantir que o banco esteja pronto, executa o `npm install` e inicia o servidor com `node src/server.js`.**

4. **Acesse a API:** <br>
   A API estará disponível em `http://localhost:3000`.

---

## Variáveis de ambiente

Crie um arquivo `.env` na raíz do projeto com o seguinte conteúdo: <br>
   ```env
   # Configuração do Banco de Dados
    DB_HOST=db
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=blog_db

   # JWT
    JWT_SECRET=sua_chave_super_secreta

   # Porta do Servidor
    PORT=3000
```

---

## Licença:
 - Este projeto é distribuído sob a [MIT license](https://opensource.org/license/MIT).









