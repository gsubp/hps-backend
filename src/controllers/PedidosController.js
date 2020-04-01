const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const pedidos = await connection("pedidos")
      .join("clientes", "clientes.id", "=", "pedidos.cliente_id")
      .select([
        "pedidos.*",
        "clientes.nome",
        "clientes.email",
        "clientes.whatsapp",
        "clientes.cidade",
        "clientes.uf"
      ]);

    return response.json(pedidos);
  },

  async create(request, response) {
    const { titulo, descricao, valor } = request.body;
    const cliente_id = request.headers.authorization;

    const [id] = await connection("pedidos").insert({
      titulo,
      descricao,
      valor,
      cliente_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const cliente_id = request.headers.authorization;
    const pedido = await connection("pedidos")
      .where("id", id)
      .select("cliente_id")
      .first();

    if (pedido.cliente_id !== cliente_id) {
      return response.status(401).json({ error: "Operação não permitida" });
    }

    await connection("pedidos")
      .where("id", id)
      .delete();
    return response.status(204).send();
  }
};
