import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Carpetas } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
  async DELETE(req: Request, ctx: HandlerContext) {
    const pk_id_carp = z.coerce.number({
      invalid_type_error: "El id de la carpeta debe ser un número",
      required_error: "El id de la carpeta es requerido",
    }).parse(ctx.params.id);

    const folder = await prismaClient.carpetas.delete({
      where: {
        pk_id_carp,
      },
    });
    return new Response(
      JSON.stringify({
        data: folder,
        message: "Carpeta eliminada exitosamente",
      } as ApiResponse<Carpetas>),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
