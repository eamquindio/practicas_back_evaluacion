const FollowUpRepository = module.exports;
const DB = require('../utils/DB');

FollowUpRepository.create = followUp => DB('seguimiento').insert(followUp).returning('*');

FollowUpRepository.listAll = () => DB('seguimiento').select('*');
