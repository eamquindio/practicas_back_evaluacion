const FollowUpController = module.exports;
const FollowUpService = require('../services/FollowUpService');

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
