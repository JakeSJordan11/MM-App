import { makeSchema } from '@nexus/schema';
import { applyMiddleware } from 'graphql-middleware';
import { errorHandler } from 'graphql-middleware-error-handler';
import { DateTimeResolver } from 'graphql-scalars';
// import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';
import * as NexusTypes from './nexusTypes'
// import { permissions } from './permissions';
// import * as Sentry from '@sentry/node';
// import { SENTRY_API_CONFIG } from '@fluentsolar/shared/constants';

// Sentry.init(SENTRY_API_CONFIG);

const errorHandlerMiddleware = errorHandler({
  onError: (error, context) => {
    // send error anywhere
    // console.log('errorMiddleWare', error, context);

    console.log('errorMiddleWare', error);
  },
  captureReturnedErrors: true,
  forwardErrors: true,
});

// export const createContext = (incoming?: { req: Request }): Context => {
//   return { prisma, req: incoming.req };
// };

export const schema = applyMiddleware(
  makeSchema({
    types: [NexusTypes],
    plugins: [
      nexusPrisma({
        experimentalCRUD: true,
        scalars: {
          DateTime: DateTimeResolver,
        },
      }),
    ],
    outputs: {
      // typegen: path.join(
      //   process.cwd(),
      //   'node_modules',
      //   '@types',
      //   'nexus-typegen',
      //   'index.d.ts'
      // ),
      // typegen: path.join(
      //   process.cwd(),
      //   'apps',
      //   'stats',
      //   'generated',
      //   'nexus-types.d.ts'
      // ),
      // * Note that this file needs to be put into apps/stats for next to compile
      typegen: path.join(
        process.cwd(),
        'libs',
        'prisma',
        'generated',
        'nexus-types.d.ts'
      ),

      schema: path.join(
        process.cwd(),
        'libs',
        'prisma',
        'generated',
        'schema.graphql'
      ),
    },
    // typegenAutoConfig: {
    //   // contextType: 'ContextModule.Context',
    //   contextType: 'Context',
    //   sources: [
    //     // {
    //     //   source: '.prisma/client',
    //     //   alias: 'prisma',
    //     // },
    //     {
    //       source: require.resolve('./context'),
    //       // source: require.resolve('.prisma/client/index.d.ts'),
    //       alias: 'context',
    //     },
    //     // {
    //     //   source: require.resolve('./context'),
    //     //   alias: 'ContextModule',
    //     // },
    //   ],
    // },
  }),
  errorHandlerMiddleware
);

// export declare type IMiddlewareResolver<TSource = any, TContext = any, TArgs = any> = (resolve: (source?: TSource, args?: TArgs, context?: TContext, info?: GraphQLResolveInfo & {
//   mergeInfo?: MergeInfo;
// }) => any, parent: TSource, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<any>;
