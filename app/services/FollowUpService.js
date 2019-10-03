const FollowUpService = module.exports;
const FollowUpRepository = require('../repositories/FollowUpRepository');

FollowUpService.listAll = () => {
  console.log('find all follow up');

  return FollowUpRepository.listAll();
};
