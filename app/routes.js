const express = require('express');
const PersonController = require('./controllers/PersonController');
const EvaluationController = require('./controllers/EvaluationController');

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


module.exports = router;
