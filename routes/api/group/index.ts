import { HandlerContext, Handlers } from "$fresh/server.ts";
import { CreateGroup, CreateGroupSchema } from "@/schema/groups.ts";
import prismaClient from "@/database/prisma.ts";
import { Grupos } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as CreateGroup;

    const result = CreateGroupSchema.parse(body);

    const group = await prismaClient.grupos.create({
      data: result,
      include: {
        Bibliografias: true,
      },
    });

    return new Response(
      JSON.stringify({
        data: group,
        message: "Grupo creado exitosamente",
      } as ApiResponse<Grupos>),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
