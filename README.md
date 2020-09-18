![logo_size](https://user-images.githubusercontent.com/44936493/93589255-f03fd000-f982-11ea-94ca-15329d3895c2.jpg)

![GitHub repo size](https://img.shields.io/github/repo-size/lopes-leandro/koacontacts-api)
![GitHub All Releases](https://img.shields.io/github/downloads/lopes-leandro/koacontacts-api/total)
![GitHub language count](https://img.shields.io/github/languages/count/lopes-leandro/koacontacts-api)

# Introdução
Koa Blog é um blog muito simples, criado para aprendizado do framework KoaJS.
O framework Koa foi criado e é mantido pela equipe do ExpressJS no intuito de ser mais performático e leve, já que seu núcleo não possui agrupamento de middleware.
Para saber mais sobre o KoaJS, visite o site https://koajs.com/

## Pré-Requisito
Antes de clonar o projeto, verifique se você tem o NodoJS instalado em sua máquina e o Docker. O NodeJS irá executar nosso projeto e o Docker irá conter nosso container do MongoDB necessário para que este projeto funcione corretamente. No [Wiki](https://github.com/lopes-leandro/koacontacts-api/wiki) do projeto, eu explico todos os passos para criar um container MongoDB no Docker, se conectar através do Nosql Client ao MongoDB e a criar os usuários necessários para nossa aplicação.

## Instalação
Após garantir que os itens do pré-requisito foi concluído, clone o repositório e execute o comando _**npm install**_ para que seja instalada todas as dependências que o projeto necessita.

## Execução
- **_npm start_**: executa o projeto na porta **_3000_**
- **_npm run dev_**: executa o projeto na porta _**1234**_ com Nodemon

Ao executar um dos comandos acima, a saída no terminal deve ser a seguinte:

![Koa Blog Is Run!!!!](https://user-images.githubusercontent.com/44936493/93596661-16b83800-f990-11ea-9e37-6c8032774eaf.png)

## Estrutura do Projeto
```project tree
.
├── assets
│   └── logo_size.jpg
├── controllers
│   ├── authController.js
│   └── postController.js
├── middleware
│   ├── authenticated.js
│   ├── guest.js
│   ├── method-override.js
│   ├── router.js
│   └── user.js
├── models
│   ├── post.js
│   └── user.js
├── .gitignore
├── db.js
├── favicon.jpg
├── index.js
├── package-lock.json
├── package.json
├── README.md
└── site.css
```
