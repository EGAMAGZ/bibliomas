import { HandlerContext, Handlers } from "$fresh/server.ts";
import { z } from "zod";
import prismaClient from "@/database/prisma.ts";
import { StudentWithAccess } from "@/schema/group-with-access.ts";
import { ApiResponse } from "@/schema/api-response.ts";

export const handler: Handlers = {
  async POST(req: Request, ctx: HandlerContext) {
    const fk_id_grup = z.coerce.number({
      invalid_type_error: "Id de grupo debe ser un número",
      required_error: "Id de grupo es requerido",
    }).parse(ctx.params.groupId);

    const { fk_id_est } = (await req.json()) as {
      fk_id_est: string;
    };

    const student = await prismaClient.grupoConAcceso.create({
      data: {
        fk_id_grup,
        fk_id_est,
      },
      include: {
        Estudiante: {
          select: {
            txt_user_est: true,
          },
        },
      },
    });

    const studentWithAccess: StudentWithAccess = {
      fk_id_est: student.fk_id_est,
      fk_id_grup: student.fk_id_grup,
      txt_user_est: student.Estudiante.txt_user_est,
      bool_access_grup: true,
    };

    return new Response(
      JSON.stringify({
        data: studentWithAccess,
        message: "Acceso compartido con éxito",
      } as ApiResponse<StudentWithAccess>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },

  async DELETE(req: Request, ctx: HandlerContext) {
    const fk_id_grup = z.coerce.number({
      invalid_type_error: "Id de grupo debe ser un número",
      required_error: "Id de grupo es requerido",
    }).parse(ctx.params.groupId);

    const { fk_id_est } = (await req.json()) as {
      fk_id_est: string;
    };

    const student = await prismaClient.grupoConAcceso.delete({
      where: {
        fk_id_grup_fk_id_est: {
          fk_id_grup,
          fk_id_est,
        },
      },
      include: {
        Estudiante: {
          select: {
            txt_user_est: true,
          },
        },
      },
    });

    const studentWithAccess: StudentWithAccess = {
      fk_id_est: student.fk_id_est,
      fk_id_grup: student.fk_id_grup,
      txt_user_est: student.Estudiante.txt_user_est,
      bool_access_grup: false,
    };

    return new Response(
      JSON.stringify({
        data: studentWithAccess,
        message: "Acceso removido exitosamente",
      } as ApiResponse<StudentWithAccess>),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
};
