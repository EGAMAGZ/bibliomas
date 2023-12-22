import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Carpetas } from "@/generated/client/deno/edge.ts";
import { FolderWithBibliographies, UpdateFolder, UpdateFolderSchema } from "@/schema/folder.ts";

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
  async PUT(req: Request, ctx: HandlerContext) {
    const body = (await req.json()) as UpdateFolder;

    const { pk_id_carp, txt_nom_carp } = UpdateFolderSchema.parse(body);

    const folder = await prismaClient.carpetas.update({
      where: {
        pk_id_carp
      },
      data: {
        txt_nom_carp
      },
      include: {
        Bibliografias: true,
      },
    });

    return new Response(
      JSON.stringify({
        data: folder,
        message: "Carpeta actualizada exitosamente",
      } as ApiResponse<FolderWithBibliographies>),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
