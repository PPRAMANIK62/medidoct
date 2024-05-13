import { z } from "zod";
import { authRouter } from "./authRouter";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "../lib/validators/queryValidator";
import { getPayloadClient } from "../getPayload";
import { paymentRouter } from "./paymentRouter";

export const appRouter = router({
  auth: authRouter,
  payment: paymentRouter,

  getInfiniteProduct: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator,
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, ...queryOptions } = query;

      const payload = await getPayloadClient();

      const parsedQueryOptions: Record<string, { equals: string }> = {};
      Object.entries(queryOptions).forEach(([key, value]) => {
        parsedQueryOptions[key] = {
          equals: value,
        };
      });

      const page = cursor || 1;

      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "products",
        where: {
          ...parsedQueryOptions,
        },
        sort,
        depth: 1,
        limit,
        page,
      });

      return {
        items,
        nextPage: hasNextPage ? nextPage : null,
      };
    }),

  getSingleProduct: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(async ({ input }) => {
      const { productId } = input;
      const payload = await getPayloadClient();

      const { docs: item } = await payload.find({
        collection: "products",
        where: {
          id: {
            equals: productId,
          },
        },
        depth: 1,
      });

      return { item };
    }),
});

export type AppRouter = typeof appRouter;
