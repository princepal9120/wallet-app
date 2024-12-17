import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@example.com",
      wallet: { create: { balance: 1000 } },
    },
  });

  console.log("User seeded:", user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
