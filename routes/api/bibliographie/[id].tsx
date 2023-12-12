import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Bibliografias } from "@/generated/client/deno/edge.ts";
import { Bucket, supabase } from "@/database/supabase.ts";

export const handler: Handlers = {
  async DELETE(req: Request, ctx: HandlerContext) {
    const result = z.coerce.number().parse(ctx.params.id);

    const bibiliographie = await prismaClient.bibliografias.delete({
      where: {
        pk_id_biblio: result,
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
      },
    );
  },
};
