import { HandlerContext, Handlers } from "$fresh/server.ts";
import {
  SearchInvitationSchema,
  StudentWithAccess,
} from "@/schema/group-with-access.ts";
import prismaClient from "@/database/prisma.ts";
import { ApiResponse } from "@/schema/api-response.ts";

export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);

    const { fk_id_grup, fk_id_est } = SearchInvitationSchema.parse({
      fk_id_grup: url.searchParams.get("groupId"),
      fk_id_est: url.searchParams.get("userId"),
    });

    const students = await prismaClient.estudiantes.findMany({
      select: {
        pk_id_est: true,
        txt_user_est: true,
        GrupoConAcceso: {
          where: {
            fk_id_grup,
          },
        },
      },
      where: {
        NOT: {
          pk_id_est: fk_id_est,
        },
      },
    });

    const studentsWithAccess: StudentWithAccess[] = students.map(
      (collaborator) => {
        return {
          fk_id_est: collaborator.pk_id_est,
          fk_id_grup: fk_id_grup,
          txt_user_est: collaborator.txt_user_est,
          bool_access_grup: collaborator.GrupoConAcceso.length > 0,
        };
      },
    );

    console.log(studentsWithAccess);
    

    return new Response(
      JSON.stringify({
        data: studentsWithAccess,
        message: "Estudiantes encontrados",
      } as ApiResponse<StudentWithAccess[]>),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      },
    );
  },
};
