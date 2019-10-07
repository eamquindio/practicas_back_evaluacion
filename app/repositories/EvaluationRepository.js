const EvaluationRepository = module.exports;
const DB = require('../utils/DB');

EvaluationRepository.create = evaluation => DB('evaluacion').insert(evaluation).returning('*');

EvaluationRepository.find = id => DB('evaluacion').select('*').where({ id }).first();

EvaluationRepository.listAll = () => DB('evaluacion').select('*');

