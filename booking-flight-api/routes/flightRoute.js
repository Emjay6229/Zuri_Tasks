const express = require('express');

const router = express.Router();

const controller = require('../controllers/flightController');

router
.post('/', controller.createFlight)
.get('/', controller.GetFlight)
.get('/:id', controller.singleFlight)
.put('/:id', controller.updateFlight)
.delete('/:id', controller.deleteFlight)

module.exports = router;

