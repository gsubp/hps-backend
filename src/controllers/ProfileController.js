const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const cliente_id = request.headers.authorization;

    const pedidos = await connection("pedidos")
      .where("cliente_id", cliente_id)
      .select("*");

    return response.json(pedidos);
  }
};
