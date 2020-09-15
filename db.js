const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/koa-blog', { useUnifiedTopology: true, useNewUrlParser: true});
}

const db = mongoose.connection;

db.on('error', error => {
  throw new Error(`erro ao conectar-se ao banco de dados: ${error}`);
})
db.once('open', () => console.log('conectado ao banco de dados'));