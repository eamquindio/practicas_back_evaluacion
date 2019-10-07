
const SelfAppraisalService = module.exports;
const SelfAppraisalRepository = require('../repositories/selfAppraisalRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

SelfAppraisalService.listAll = () => SelfAppraisalRepository.listAll();

SelfAppraisalService.create = async (selfAppraisal) => {
  console.log('creating selfAppraisal');

  const autoevaToValidate = await this.find(selfAppraisal.id);
  console.log(autoevaToValidate);
  if (autoevaToValidate) throw ErrorHandler.BaseError('selfAppraisal already exists', 409);

  return SelfAppraisalRepository.create(selfAppraisal);
};

SelfAppraisalService.find = (selfAppraisal) => {
  console.log('find selfAppraisal');

  return SelfAppraisalRepository.find(selfAppraisal);
};

