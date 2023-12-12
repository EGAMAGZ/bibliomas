import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Bibliografias } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
  async DELETE(req: Request, ctx: HandlerContext) {
    const result = z.coerce.number().parse(ctx.params.id);

    const bibiliographie = await prismaClient.bibliografias.delete({
      where: {
        pk_id_biblio: result,
      },
    });

    return new Response(
      JSON.stringify({
        data: bibiliographie,
        message: "Bibliografía eliminada",
      } as ApiResponse<Bibliografias>),
      {
        status: 200,
      },
    );
  },
};
