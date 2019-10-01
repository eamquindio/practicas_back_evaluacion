const SelfAppraisalService = module.exports;
const SelfAppraisalRepository = require('../repositories/SelfAppraisalRepository');

SelfAppraisalService.find = (selfAppraisal) => {
  console.log('find selfAppraisal');

  return SelfAppraisalRepository.find(selfAppraisal);
};
