const express = require("express");
const ClientesController = require("./controllers/ClientesController");
const SessionController = require("./controllers/SessionController");
const ProfileController = require("./controllers/ProfileController");
const PedidosController = require("./controllers/PedidosController");
const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/clientes", ClientesController.list);
routes.post("/clientes", ClientesController.create);

routes.get("/profile", ProfileController.index);

routes.get("/pedidos", PedidosController.index);
routes.post("/pedidos", PedidosController.create);
routes.delete("/pedidos/:id", PedidosController.delete);

module.exports = routes;
