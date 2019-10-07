const AssesmentRepository = module.exports; 
const DB = require('../utils/DB');


AssesmentRepository.create = evaluaciones => DB('evaluaciones').insert(evaluaciones).returning('*');

AssesmentRepository.listAll = () => DB('evaluaciones').select('*');