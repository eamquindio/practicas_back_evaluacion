const EvaluacionService = module.exports;
const EvaluacionRepository = require('../repositories/EvaluacionRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

EvaluacionService.create = async (evaluacion) => {
  console.log('creating evaluacion');

  const evaluacionToValidate = await this.find(evaluacion.id);
  console.log(evaluacionToValidate);
  if (evaluacionToValidate) throw ErrorHandler.BaseError('evaluacion already exists', 409);

  return EvaluacionRepository.create(evaluacion);
};

EvaluacionService.find = (evaluacion) => {
  console.log('find evaluacion');

  return EvaluacionRepository.find(evaluacion);
};
