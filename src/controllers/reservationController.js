const reservationService = require('../services/reservationService');

exports.createReservation = async (req, res) => {
	try {
		const reservation = await reservationService.createReservation(req.body);
		res.status(201).json(reservation);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getReservation = async (req, res) => {
	try {
		const reservation = await reservationService.getReservation(req.params.id);
		if (!reservation) {
			res.status(404).json(404).json({ error: 'Reservation not fount' });
		}
		res.json(reservation);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};


exports.updateReservation = async (req, res) => {
	try {
		const reservation = reservationService.updateReservation(
			req.params.id,
			req.body
		);
		if (!reservation) {
			res.status(404).json({ error: 'Reservation not font' });
		}
		res.json(reservation);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.deleteReservation = async (req, res) => {
	try {
		const result = await reservationService.deleteReservation(req.params.id);
		if (!result) {
			res.status(404).json({ error: 'Reservation not font' });
		}
		res.status(204).send();
		res.json({ message: "eliminado" })
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
