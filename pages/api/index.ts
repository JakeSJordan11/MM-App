import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../prisma/schema';

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

type Context = {
  prisma: PrismaClient;
  req: Request;
};

const createContext = (incoming?: { req: Request }): Context => {
  return { ...incoming, prisma };
};

export default new ApolloServer({
  schema,
  context: createContext,
  uploads: { maxFieldSize: 20 },
}).createHandler({
  path: '/api',
});
