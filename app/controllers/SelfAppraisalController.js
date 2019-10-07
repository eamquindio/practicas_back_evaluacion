const SelfAppraisalController = module.exports;
const SelfAppraisalService = require('../services/selfAppraisalService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

SelfAppraisalController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await SelfAppraisalService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

SelfAppraisalController.find = async (req, res, next) => {
  try {
    const { params: { code } } = req;
    const selfAppraisal = await SelfAppraisalService.find(code);

    if (!selfAppraisal) return next(new ErrorHandler.BaseError('SelfAppraisal not exists', 404));

    return res.send(selfAppraisal);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
