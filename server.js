const express = require('express');
const routes = require('./src/routes');
const mongoose = require("mongoose");
const dotEnv = require('dotenv');
const app = express();

dotEnv.config();

mongoose.connect(process.env.CONEXAO_BD, { useNewUrlParser: true });

app.use(express.json());
app.use(routes);
app.listen(process.env.PORTA);
