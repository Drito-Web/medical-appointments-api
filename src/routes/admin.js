const { Router } = require('express');

const { createTimeBlock, listReservations } = require('../controllers/adminController');

const authenticationToken = require('../middlewares/auth');

const router = Router();

router.post('/time-blocks', authenticationToken, createTimeBlock);
router.get('/reservations', authenticationToken, listReservations);


module.exports = router;

