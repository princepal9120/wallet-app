import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/src/routes/appRouter';

export default createNextApiHandler({
  router: appRouter,
});
