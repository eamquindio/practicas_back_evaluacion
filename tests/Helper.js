const Helpers = module.exports;
const db = require('../app/utils/DB');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('persons').del();
<<<<<<< 9a2807d6a086180d0ecc4060df302f311c6d2676

  await db('selfAppraisal').del();
<<<<<<< 685a19f4a306063cac5d3b4a002a4bacec367e79
  await db('seguimiento').del();
=======

  await db('autoevaluaciones').del();

<<<<<<< bd53890d3d990e0ebfc99aeee2ddfaa5042ef083
=======
=======
  await db('selfAppraisal').del();
>>>>>>> insert autoevaluacion[resolves # 10]
>>>>>>> insert autoevaluacion[resolves # 10]
};
