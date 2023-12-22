import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Bibliografias } from "@/generated/client/deno/edge.ts";
import { Bucket, supabase } from "@/database/supabase.ts";
import { UpdateBibliographieSchema } from "@/schema/bibliographie.ts";

export const handler: Handlers = {
  async DELETE(req: Request, ctx: HandlerContext) {
    const pk_id_biblio = z.coerce.number().parse(ctx.params.id);

    const bibiliographie = await prismaClient.bibliografias.delete({
      where: {
        pk_id_biblio,
      },
      include: {
        Archivos: true,
      },
    });

    if (bibiliographie.Archivos) {
      await supabase.storage
        .from(Bucket.bibliographyDocuments)
        .remove(bibiliographie.Archivos.map((file) => file.txt_url_arch));
    }

    return new Response(
      JSON.stringify({
        data: bibiliographie,
        message: "Bibliografía eliminada",
      } as ApiResponse<Bibliografias>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },

  async GET(_req: Request, ctx: HandlerContext) {
    const pk_id_biblio = z.coerce.number().parse(ctx.params.id);

    const bibiliographie = await prismaClient.bibliografias.findUnique({
      where: {
        pk_id_biblio,
      },
    });

    return new Response(
      JSON.stringify({
        data: bibiliographie,
        message: "Bibliografía encontrada",
      } as ApiResponse<Bibliografias>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
  async PUT(req: Request, ctx: HandlerContext) {
    const pk_id_biblio = z.coerce.number().parse(ctx.params.id);

    const body = (await req.json()) as Bibliografias;

    const result = UpdateBibliographieSchema.parse(body);

    const bibiliographie = await prismaClient.bibliografias.update({
      where: {
        pk_id_biblio,
      },
      data: result,
    });

    return new Response(
      JSON.stringify({
        data: bibiliographie,
        message: "Bibliografía actualizada",
      } as ApiResponse<Bibliografias>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
};
