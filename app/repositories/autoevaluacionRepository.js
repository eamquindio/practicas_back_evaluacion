const autoevaluacionRepository = module.exports;
const DB = require('../utils/DB');

autoevaluacionRepository.create = autoevaluacion => DB('autoevaluaciones').insert(autoevaluacion).returning('*');
autoevaluacionRepository.find = id => DB('autoevaluaciones').select('*').where({ id }).first();
