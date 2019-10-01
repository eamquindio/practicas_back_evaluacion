exports.up = knex =>
  knex.schema.createTable('selfAppraisal', (table) => {
    table.string('code').primary();
    table.string('date');
    table.string('labor_link');
    table.string('recommend');
    table.string('student_comment');
    table.string('aspects_code');
    table.integer('practice_id');
  });

exports.down = knex => knex.schema.dropTable('selfAppraisal');
