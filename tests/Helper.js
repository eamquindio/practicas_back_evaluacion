const Helpers = module.exports;
const db = require('../app/utils/DB');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('persons').del();

  await db('selfAppraisal').del();
<<<<<<< 685a19f4a306063cac5d3b4a002a4bacec367e79
  await db('seguimiento').del();
=======

  await db('autoevaluaciones').del();

>>>>>>> insert autoevaluacion[resolves # 10]
};
