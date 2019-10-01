const SelfAppraisalRepository = module.exports;
const DB = require('../utils/DB');

SelfAppraisalRepository.create = selfAppraisal => DB('selfAppraisal').insert(selfAppraisal).returning('*');

SelfAppraisalRepository.find = code => DB('selfAppraisal').select('*').where({ code }).first();
