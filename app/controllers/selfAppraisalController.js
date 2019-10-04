const SelfAppraisalController = module.exports;
const SelfAppraisalService = require('../services/selfAppraisalService');

  SelfAppraisalController.listAll = async (req, res, next) => {
    try {
      const selfAppraisal = await SelfAppraisalService.listAll();
      if (selfAppraisal.length === 0) return res.status(204).send(selfAppraisal);
  
      return res.send(selfAppraisal);
    } catch (error) {
      console.log(error);
  
      return next(error);
    }
  };