import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from "../../../server/src/routes/appRouter";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/trpc',
    }),
  ],
});
