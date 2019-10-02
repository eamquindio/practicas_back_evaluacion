exports.up = knex =>
  knex.schema.createTable('evaluaciones', (table) => {
    table.integer('id').primary();
    table.integer('Practica_estudiante_id');
    table.date('FechaRealizacion');
    table.string('VinculacionLaboral');
    table.string('NombreEvaluador');
    table.string('ComentarioEmpresa');
    table.string('satisfaccion');
    table.string('porqueSatisfaccion');
    table.string('conocimientos');
    table.string('capacidades');
    table.string('comportamiento');
    table.string('actitudes_aptitudes');
    table.string('imagen');
  });

exports.down = knex => knex.schema.dropTable('evaluaciones');
