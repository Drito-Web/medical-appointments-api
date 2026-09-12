const { Router } = require('express');
const appointmentController = require('../controllers/appointmentController');
const authenticateToken = require('../middlewares/auth');

const router = Router();


router.use('/:id/appointments',
	authenticateToken,
	appointmentController.getUserAppointments);

module.exports = router;