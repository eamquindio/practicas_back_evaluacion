const EvaluationService = module.exports;
const EvaluationRepository = require('../repositories/EvaluationRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

EvaluationService.create = async (evaluation) => {
  console.log('creating evaluation');

  const evaluationToValidate = await this.find(evaluation.id);
  console.log(evaluationToValidate);
  if (evaluationToValidate) throw ErrorHandler.BaseError('evaluation already exists', 409);

  return EvaluationRepository.create(evaluation);
};

EvaluationService.find = (evaluation) => {
    console.log('find evaluation');
  
    return EvaluationRepository.find(evaluation);
  };