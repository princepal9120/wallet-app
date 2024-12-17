import express from "express";
import cors from "cors";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from "./routes/appRouter";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// tRPC setup
app.use('/trpc', createExpressMiddleware({
  router: appRouter,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
