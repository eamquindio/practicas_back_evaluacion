const SelfAppraisalService = module.exports;
const SelfAppraisalRepository = require('../repositories/selfAppraisalRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

SelfAppraisalService.create = async (selfAppraisal) => {
  console.log('creating selfAppraisal');

  const selfAppraisalToValidate = await this.find(selfAppraisal.code);
  console.log(selfAppraisalToValidate);
  if (selfAppraisalToValidate) throw ErrorHandler.BaseError('selfAppraisal already exists', 409);

  return SelfAppraisalRepository.create(selfAppraisal);
};

SelfAppraisalService.find = (selfAppraisal) => {
  console.log('find selfAppraisal');

  return SelfAppraisalRepository.find(selfAppraisal);
};
