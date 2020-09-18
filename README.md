# koablog-api
Boilerplate API in KoaJS

![GitHub repo size](https://img.shields.io/github/repo-size/lopes-leandro/koacontacts-api?style=for-the-badge)
![GitHub All Releases](https://img.shields.io/github/downloads/lopes-leandro/koacontacts-api/total?style=for-the-badge)

**Monte seu MongoDb em um container do Docker**
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
