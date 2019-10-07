const AssesmentController = module.exports;
const AssesmentService = require('../services/AssesmentService');
const ErrorHandlerMiddleware = require('../utils/ErrorHandlerMiddleware');


AssesmentController.listAll = async (req, res, next) => {
    try {
      const  evaluaciones = await AssesmentService.listAll();
      if (evaluaciones.length === 0) return res.status(204).send(evaluaciones);
  
      return res.send(evaluaciones);
    } catch (error) {
      console.log(error);
  
      return next(error);
    }
  };
  