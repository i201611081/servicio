const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const controladorUsuario  = require("./lib/controlador/usuario.js")
const controladorPlato  = require("./lib/controlador/plato.js")

app.post("/login",controladorUsuario.login);
app.post("/listarMenuDia",controladorPlato.listarMenuDia);

app.listen(3000);