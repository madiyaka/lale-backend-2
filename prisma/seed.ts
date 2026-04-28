import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.location.createMany({
    data: [
    ],
    skipDuplicates: true,
  });
  console.log('Seeded 5 locations');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
