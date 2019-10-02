const EvaluacionController = module.exports;
const EvaluacionService = require('../services/EvaluacionService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

EvaluacionController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await EvaluacionService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

EvaluacionController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const evaluacion = await EvaluacionService.find(id);

    if (!evaluacion) return next(new ErrorHandler.BaseError('evaluacion not exists', 404));

    return res.send(evaluacion);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
