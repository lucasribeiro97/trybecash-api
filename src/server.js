const app = require('./app');

const connection = require('./db/connection');

const PORT = 3002;

app.listen(PORT, async () => {
  console.log(`API Trybecash está sendo executada na porta ${PORT}`);
});