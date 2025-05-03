import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/routes.js';
import sequelize from './src/database/db.js'; 

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(router);


sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
    app.listen(8080, () => {
      console.log('Servidor rodando na porta 8080.');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
  });
