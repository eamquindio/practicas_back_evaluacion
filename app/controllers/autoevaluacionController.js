const AutoevaluacionController = module.exports;
const AutoevaluacionService = require('../services/autoevaluacionService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

AutoevaluacionController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await AutoevaluacionService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

AutoevaluacionController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const autoeva = await AutoevaluacionService.find(id);

    if (!autoeva) return next(new ErrorHandler.BaseError('autoevaluacion not exists', 404));

    return res.send(autoeva);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
