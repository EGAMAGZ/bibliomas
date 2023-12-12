import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { Bibliografias, Prisma } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { CreateBibliographieSchema } from "@/schema/bibliographie.ts";
import { Pagination, PaginationParamsSchema } from "@/schema/pagination.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const { page, limit } = PaginationParamsSchema.parse({
      page: url.searchParams.get("page"),
      limit: url.searchParams.get("limit"),
    });

    const [data, totalRecords] = await Promise.all([
      prismaClient.bibliografias.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      prismaClient.bibliografias.count(),
    ]);

    const totalPages = Math.ceil(totalRecords / limit);

    return new Response(
      JSON.stringify({
        data,
        pagination: {
          totalRecords,
          totalPages,
          currentPage: page,
        },
        message: "Bibliografias obtenidas exitosamente",
      } as Pagination<Bibliografias>),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      },
    );
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as Prisma.BibliografiasCreateInput;

    const result = CreateBibliographieSchema.parse(body);
    const bibliographie = await prismaClient.bibliografias.create({
      data: result,
    });

    return new Response(
      JSON.stringify({
        data: bibliographie,
        message: "Bibliografia creada exitosamente",
      } as ApiResponse<Bibliografias>),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      },
    );
  },
};
