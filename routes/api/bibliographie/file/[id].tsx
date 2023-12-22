import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Archivos, Prisma } from "@/generated/client/deno/edge.ts";
import {
  BibliographieFile,
  BibliographieFileSchema,
  UpdateBibliographieFileSchema,
} from "@/schema/files.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const bibliographyId = z.coerce.number({
      invalid_type_error: "El id de la bibliografía debe ser un número",
    }).parse(ctx.params.id);

    const bibliographyFile = await prismaClient.archivos.findFirst({
      where: {
        fk_id_biblio: bibliographyId,
      },
    });

    return new Response(
      JSON.stringify({
        data: bibliographyFile,
        message: "Bibliografía encontrada",
      } as ApiResponse<Archivos | null>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
  async PUT(req: Request, ctx: HandlerContext) {
    const pk_id_arch = z.coerce.number({
      invalid_type_error: "El id de la bibliografía debe ser un número",
    }).parse(ctx.params.id);

    const body = (await req.json()) as BibliographieFile;

    const { txt_url_arch } = UpdateBibliographieFileSchema.parse(body);

    const bibliographyFile = await prismaClient.archivos.update({
      where: {
        pk_id_arch,
      },
      data: {
        txt_url_arch,
      },
    });
    return new Response(
      JSON.stringify({
        data: bibliographyFile,
        message: "Bibliografía actualizada",
      } as ApiResponse<Archivos>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
};
