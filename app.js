require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const menuRouter = require('./routes/menu');
const artisansRouter = require('./routes/artisans');

const app = express();

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN,
};
app.use(cors(corsOptions));



app.use(express.json());

app.use('/api/menu', menuRouter);
app.use('/api/artisans', artisansRouter);

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('connexion a la base de donnees reussie');
    app.listen(PORT, () => {
        console.log(`API demarree sur http://localhost:${PORT}`)
    });
  })
  .catch((err) => {
    console.error('Impossible de se connecter a la base de donnes :',err);
  });