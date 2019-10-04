const SelfAppraisalRepository = module.exports;
const DB = require('../utils/DB');

SelfAppraisalRepository.listAll = () => DB('selfAppraisal').select('*');
SelfAppraisalRepository.create =selfAppraisal => DB('selfAppraisal').insert(selfAppraisal).returning('*');