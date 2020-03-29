const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;
    const cliente = await connection("clientes")
      .where("id", id)
      .select("nome")
      .first();

    if (!cliente) {
      return res.status(401).json({ error: "Cliente não encontrado." });
    }
    return res.json(cliente);
  }
};
