const FollowUpRepository = module.exports;
const DB = require('../utils/DB');

FollowUpRepository.create = seguimiento => DB('seguimiento').insert(seguimiento).returning('*');

FollowUpRepository.find = id => DB('seguimiento').select('*').where({ id }).first();

FollowUpRepository.listAll = () => DB('seguimiento').select('*');
