const express = require('express');
const PersonController = require('./controllers/PersonController');

const EvaluationController = require('./controllers/EvaluationController');
const SelfAppraisalController = require('./controllers/selfAppraisalController');
const FollowUpController = require('./controllers/FollowUpController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);
router.get('/seguimiento/all', FollowUpController.listAll);

// Evaluation routes
router.get('/evaluation/:id(\\d+)', EvaluationController.find);
router.post('/evaluation', EvaluationController.save);


// Autoevaluation routes
router.get('/selfAppraisal/all', SelfAppraisalController.listAll);
// Seguimiento Routes
router.post('/seguimiento', FollowUpController.save);

router.post('/selfAppraisal', SelfAppraisalController.save);

router.get('/evaluation/all', EvaluationController.listAll);


module.exports = router;
