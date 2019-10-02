exports.up = knex =>
  knex.schema.createTable('evaluacion', (table) => {
    table.increments('id');
    table.integer('id_practica_estudiante');
    table.string('vinculacion_laboral');
    table.string('nombre_evaluador');
    table.string('comentario_empresa');
    table.string('satisfaccion');
    table.string('porque_satisfaccion');
    table.string('conocimientos');
    table.string('capacidades');
    table.string('comportamiento');
    table.string('actitud_aptitud');
    table.string('imagen');
  });

exports.down = knex => knex.schema.dropTable('evaluacion');
