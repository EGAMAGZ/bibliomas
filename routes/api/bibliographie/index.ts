import { HandlerContext, Handlers } from "$fresh/server.ts";
import { Prisma } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { CreateBibliographieSchema } from "@/schema/bibliographie.ts";
import prismaClient from "@/database/prisma.ts";
import { Bibliografias } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
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
