const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { nome, email, whatsapp, cidade, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("clientes").insert({
      id,
      nome,
      email,
      whatsapp,
      cidade,
      uf
    });

    return res.json({ id });
  },
  async list(req, res) {
    const clientes = await connection("clientes").select("*");
    return res.json(clientes);
  }
};
