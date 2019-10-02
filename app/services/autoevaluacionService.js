const autoevaluacionService = module.exports;
const autoevaluacionRepository = require('../repositories/autoevaluacionRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

autoevaluacionService.create = async (autevaluacion) => {
  console.log('creating autoevaluacion');

  const autoevaToValidate = await this.find(autevaluacion.id);
  console.log(autoevaToValidate);
  if (autoevaToValidate) throw ErrorHandler.BaseError('autoevaluacion already exists', 409);

  return autoevaluacionRepository.create(autevaluacion);
};

autoevaluacionService.find = (autoevaluacion) => {
  console.log('find autoevaluacion');

  return autoevaluacionRepository.find(autoevaluacion);
};
