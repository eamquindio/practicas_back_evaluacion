exports.up = knex =>
  knex.schema.createTable('selfAppraisal', (table) => {
    table.integer('id').primary();
    table.date('fecha_realizacion');
    table.integer('practica_estudiante_id');
    table.string('vinculacion_laboral');
    table.string('recomienda_empresa');
    table.string('comentario_estudiante');
    table.string('aplicacion_conceptos');
    table.string('cumplimiento_laborales');
    table.string('iniciativa_creatividad');
    table.string('manejo_herramientas');
    table.string('actitud_disposicion');
    table.string('aprovechamiento');
    table.string('evaluacion_empresa');
    table.string('satisfacion');
    table.string('por_que_satisfacion');
    table.string('por_que_recomendacion');
  });

exports.down = knex => knex.schema.dropTable('selfAppraisal');