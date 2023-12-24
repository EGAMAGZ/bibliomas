import { HandlerContext, Handlers } from "$fresh/server.ts";
import prismaClient from "@/database/prisma.ts";
import { Bibliografias, Prisma } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { CreateBibliographieSchema } from "@/schema/bibliographie.ts";
import { Pagination, PaginationParamsSchema } from "@/schema/pagination.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const { page, limit, userId, folderId, groupId } = PaginationParamsSchema
      .parse({
        page: url.searchParams.get("page"),
        limit: url.searchParams.get("limit"),
        userId: url.searchParams.get("userId"),
        folderId: url.searchParams.get("folderId"),
        groupId: url.searchParams.get("groupId"),
      });

    let bibliographies: Bibliografias[];
    let totalRecords: number;
    
    if (groupId) {
      bibliographies = await prismaClient.bibliografias.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          fk_id_carp: folderId,
          fk_id_grup: groupId,
        },
      });

      totalRecords = await prismaClient.bibliografias.count({
        where: {
          fk_id_carp: folderId,
          fk_id_grup: groupId,
        },
      });
    } else {
      bibliographies = await prismaClient.bibliografias.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          fk_id_est: userId,
          fk_id_carp: folderId,
          fk_id_grup: groupId,
        },
      });

      totalRecords = await prismaClient.bibliografias.count({
        where: {
          fk_id_est: userId,
          fk_id_carp: folderId,
          fk_id_grup: groupId,
        },
      });
    }

    const totalPages = Math.ceil(totalRecords / limit);

    return new Response(
      JSON.stringify({
        data: {
          content: bibliographies,
          pagination: {
            currentPage: page,
            totalPages,
            totalRecords,
          },
        },
        message: "Bibliografias obtenidas exitosamente",
      } as ApiResponse<Pagination<Bibliografias>>),
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
