const EvaluationController = module.exports;
const EvaluationService = require('../services/EvaluationService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

EvaluationController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await EvaluationService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

EvaluationController.find = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const evaluation = await EvaluationService.find(id);
  
      if (!evaluation) return next(new ErrorHandler.BaseError('evaluation not exists', 404));
  
      return res.send(evaluation);
    } catch (error) {
      console.log(error);
  
      return next(error);
    }
  };