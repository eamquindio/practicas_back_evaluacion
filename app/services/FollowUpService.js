const FollowUpService = module.exports;
const FollowUpRepository = require('../repositories/FollowUpRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

FollowUpService.create = async (seguimiento) => {
  console.log('creating seguimiento');

  const seguimientoToValidate = await this.find(seguimiento.id);
  console.log(seguimientoToValidate);
  if (seguimientoToValidate) throw ErrorHandler.BaseError('seguimiento already exists', 409);

  return FollowUpRepository.create(seguimiento);
};

FollowUpService.find = (seguimiento) => {
  console.log('find seguimiento');

  return FollowUpRepository.find(seguimiento);
};


FollowUpService.listAll = () => {
  console.log('find all follow up');

  return FollowUpRepository.listAll();
};
