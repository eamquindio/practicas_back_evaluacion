exports.up = knex =>
  knex.schema.createTable('selfAppraisal', (table) => {
    table.string('code').primary();
    table.string('date');
    table.string('labor_link');
    table.string('recommend');
    table.string('student_comment');
    table.string('aspects_code');
    table.string('concepts');
    table.string('work_compliance');
    table.string('initiative');
    table.string('handling_tools');
    table.string('attitude');
    table.string('exploitation');
    table.string('evaluation');
    table.string('satisfaction');
    table.string('b_satisfaction');
    table.string('b_recommendation');
    table.integer('practice_id');
  });

exports.down = knex => knex.schema.dropTable('selfAppraisal');
