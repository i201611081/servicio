const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const login  = require("./lib/controlador/login.js")

app.post("/",login);

app.listen(3000);