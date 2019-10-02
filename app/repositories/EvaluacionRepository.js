const EvaluacionRepository = module.exports;
const DB = require('../utils/DB');

EvaluacionRepository.create = evaluacion => DB('evaluaciones').insert(evaluacion).returning('*');

EvaluacionRepository.find = id => DB('evaluaciones').select('*').where({ id }).first();
