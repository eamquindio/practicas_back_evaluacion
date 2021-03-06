const Helpers = module.exports;
const db = require('../app/utils/DB');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('persons').del();
  await db('seguimiento').del();
  await db('selfAppraisal').del();
  await db('evaluacion').del();


  await db('selfAppraisal').del();
  await db('seguimiento').del();
  await db('evaluacion').del();
};
