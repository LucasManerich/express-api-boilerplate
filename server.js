const express = require('express');
const routes = require('./src/routes');
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/app", { useNewUrlParser: true });

app.use(express.json());
app.use(routes);
app.listen(3333);
