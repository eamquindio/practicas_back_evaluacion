const SelfAppraisalRepository = module.exports;
const DB = require('../utils/DB');

SelfAppraisalRepository.find = code => DB('selfAppraisal').select('*').where({ code }).first();
