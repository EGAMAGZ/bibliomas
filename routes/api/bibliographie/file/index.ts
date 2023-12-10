import { HandlerContext, Handlers } from "$fresh/server.ts";
import { BibliographieFileSchema } from "@/schema/files.ts";
import prismaClient from "@/database/prisma.ts";
import { Archivos } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as Archivos;

    const result = BibliographieFileSchema.parse(body);
    const bibliographieFile = await prismaClient.archivos.create({
      data: result,
    });
    return new Response(
      JSON.stringify({
        data: result.txt_url_arch,
        message: "Bibliografia creada exitosamente",
      } as ApiResponse<string>),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      },
    );
  },
};
