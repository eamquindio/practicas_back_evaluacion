const AssesmentService = module.exports;
const AssesmentRepository = require('../repositories/AssesmentRepository');
const ErrorHandlerMiddleware = require('../utils/ErrorHandlerMiddleware');

AssesmentService.listAll = () => {
    console.log('find all evaluaciones');
  
    return AssesmentRepository.listAll();
  };