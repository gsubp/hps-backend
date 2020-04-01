exports.up = function(knex) {
  return knex.schema.createTable("pedidos", function(table) {
    table.increments();
    table.string("titulo").notNullable();
    table.string("descricao").notNullable();
    table.string("valor").notNullable();
    table.string("cliente_id").notNullable();
    table
      .foreign("cliente_id")
      .references("id")
      .inTable("clientes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("pedidos");
};
