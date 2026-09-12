const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUserAppointments = async (userId) => {
	try {
		const appointment = await prisma.appointment.findMany({
			where: { userId: parseInt(userId) },
			include: { timeBlock: true }
		});
		return appointment;
	} catch (error) {
		throw new Error('Herror al obtener el Historial de citas');
	};
};