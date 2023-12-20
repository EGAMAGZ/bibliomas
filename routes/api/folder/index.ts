import { HandlerContext, Handlers } from "$fresh/server.ts";
import { CreateFolder, CreateFolderSchema } from "@/schema/folder.ts";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Carpetas } from "@/generated/client/deno/edge.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as CreateFolder;

    const result = CreateFolderSchema.parse(body);
    const folder = await prismaClient.carpetas.create({
      data: result,
    });
    return new Response(
      JSON.stringify({
        data: folder,
        message: "Carpeta creada exitosamente",
      } as ApiResponse<Carpetas>),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
