// seed.js
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.createMany({
//     data: [
//       { name: 'Alice', email: 'alice@example.com' },
//       { name: 'Bob', email: 'bob@example.com' },
//     ],
//   });

//   console.log('Datos insertados');
// }

// main()
//   .catch((e) => console.error(e))
//   .finally(() => prisma.$disconnect());


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const demoUsers = [
    { name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { name: 'María López', email: 'maria.lopez@example.com' },
    { name: 'Carlos García', email: 'carlos.garcia@example.com' }
  ];

  for (const user of demoUsers) {
    await prisma.user.create({
      data: user
    });
  }

  console.log('Usuarios de demostración creados con éxito');

  await prisma.user.deleteMany();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
