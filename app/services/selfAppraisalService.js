const SelfAppraisalService = module.exports;
const SelfAppraisalRepository = require('../repositories/selfAppraisalRepository');


SelfAppraisalService.listAll = () => SelfAppraisalRepository.listAll();
