exports.up = knex =>
  knex.schema.createTable('seguimiento', (table) => {
    table.string('id').primary();
    table.string('observaciones');
    table.date('fechaHora');
    table.integer('practica_estudiante_id');
  });

exports.down = knex => knex.schema.dropTable('seguimiento');
