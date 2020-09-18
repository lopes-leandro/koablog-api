![logo_size](https://user-images.githubusercontent.com/44936493/93589255-f03fd000-f982-11ea-94ca-15329d3895c2.jpg)

# Introdução
Koa Blog é um blog muito simples, criado para aprendizado do framework KoaJS.
O framework Koa foi criado e é mantido pela equipe do ExpressJS no intuito de ser mais performático e leve, já que seu núcleo não possui agrupamento de middleware.
Para saber mais sobre o KoaJS, visite o site https://koajs.com/

## Instalação

```
docker run -d -p 27017:27017 --name koa-blog -e Auth=no mongo
```
**Remover uma porta que ficou travada no Linux**
```
sudo ss --kill state listening src :1234
```
Execute o comando abaixo na raiz do projeto para instalar os pacotes necessários:
```
npm install
```
O comando abaixo utiliza o Nodemon para executar o projeto para desenvolvimento na porta 1234
```
npm run dev
```
O comando abaixo executa o projeto para produção na porta padrão 3000
```
npm start
```

![GitHub repo size](https://img.shields.io/github/repo-size/lopes-leandro/koacontacts-api)
![GitHub All Releases](https://img.shields.io/github/downloads/lopes-leandro/koacontacts-api/total)
![GitHub language count](https://img.shields.io/github/languages/count/lopes-leandro/koacontacts-api)

