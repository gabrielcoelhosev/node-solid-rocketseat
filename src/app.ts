import fastify from "fastify";
import { routes } from "./routes/index.js";
import { logger } from "./middlewares/logger.js";
import { PrismaClient } from "./generated/prisma/index.js";

export const app = fastify();
app.addHook('onResponse', logger);
app.register(routes);

export const prisma = new PrismaClient(); //importar de onde foi gerado as models, não de extensions
