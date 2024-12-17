import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";

const t = initTRPC.create();
const prisma = new PrismaClient();

export const appRouter = t.router({
  getUser: t.procedure.input((val: { username: string }) => val)
    .query(async ({ input }) => {
      return prisma.user.findUnique({ where: { username: input.username } });
    }),
  
  createTransaction: t.procedure
    .input((val: { walletId: number; amount: number; type: string; category: string }) => val)
    .mutation(async ({ input }) => {
      return prisma.transaction.create({
        data: {
          walletId: input.walletId,
          amount: input.amount,
          type: input.type,
          category: input.category,
        },
      });
    }),
});

export type AppRouter = typeof appRouter;
