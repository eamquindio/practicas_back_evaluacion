const FollowUpController = module.exports;
const FollowUpService = require('../services/FollowUpService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

FollowUpController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await FollowUpService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

FollowUpController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const seguimiento = await FollowUpService.find(id);

    if (!seguimiento) return next(new ErrorHandler.BaseError('seguimiento not exists', 404));

    return res.send(seguimiento);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

FollowUpController.listAll = async (req, res, next) => {
  try {
    const followUp = await FollowUpService.listAll();
    if (followUp.length === 0) return res.status(204).send(followUp);

    return res.send(followUp);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
