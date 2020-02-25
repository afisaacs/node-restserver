require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Configuración globa de rutas
app.use(require('./routes/index'));

mongoose
  .connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(res => console.log('BD Conectada'))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Escuchando puerto ${process.env.PORT}`));
