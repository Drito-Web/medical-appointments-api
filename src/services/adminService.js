const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTimeBlockService = async (starTime, endTime) => {
	const newTimeBlock = await prisma.timeBlock.create({
		data: {
			startTime: new Date(starTime),
			endTime: new Date(endTime)
		}
	});
	return newTimeBlock;
};

const listReservationsService = async () => {
	const reservations = await prisma.appointment.findMany({
		include: {
			user: true,
			timeBlock: true
		}
	});
	return reservations; 
};

module.exports = { createTimeBlockService, listReservationsService};

