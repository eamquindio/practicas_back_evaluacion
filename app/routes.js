const express = require('express');
const PersonController = require('./controllers/PersonController');
<<<<<<< HEAD
const EvaluationController = require('./controllers/EvaluationController');
=======
>>>>>>> fe66d310888877a38bd4bcb513edeb09ad6806d1
const SelfAppraisalController = require('./controllers/selfAppraisalController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);


// Evaluation routes
router.get('/evaluation/:id(\\d+)', EvaluationController.find);
router.post('/evaluation', EvaluationController.save);

// Autoevaluation routes
router.get('/selfAppraisal/all', SelfAppraisalController.listAll);

module.exports = router;
