const express = require("express");
const ClientesController = require("./controllers/ClientesController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/clientes", ClientesController.list);
routes.post("/clientes", ClientesController.create);

module.exports = routes;
