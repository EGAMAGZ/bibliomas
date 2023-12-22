import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Grupos } from "@/generated/client/deno/edge.ts";
import {
  GroupWithBibliographies,
  UpdateGroup,
  UpdateGroupSchema,
} from "@/schema/groups.ts";

export const handler: Handlers = {
  async DELETE(_req: Request, ctx: HandlerContext) {
    const pk_id_grup = z.coerce.number({
      invalid_type_error: "El id del grupo debe ser un número",
      required_error: "El id del grupo es requerido",
    }).parse(ctx.params.id);

    const group = await prismaClient.grupos.delete({
      where: {
        pk_id_grup,
      },
    });

    return new Response(
      JSON.stringify({
        data: group,
        message: "Grupo eliminado exitosamente",
      } as ApiResponse<Grupos>),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },

  async PUT(req: Request, _ctx: HandlerContext) {
    const body = (await req.json()) as UpdateGroup;

    const { pk_id_grup, txt_nom_grup } = UpdateGroupSchema.parse(body);

    const group = await prismaClient.grupos.update({
      where: {
        pk_id_grup,
      },
      data: {
        txt_nom_grup,
      },
      include: {
        Bibliografias: true,
      },
    });

    return new Response(
      JSON.stringify({
        data: group,
        message: "Grupo actualizado exitosamente",
      } as ApiResponse<GroupWithBibliographies>),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
