import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import prismaClient from "@/database/prisma.ts";

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  try {
    const group = await prismaClient.grupoConAcceso.findFirstOrThrow({
      where: {
        OR: [
          {
            Grupo: {
              fk_id_est: ctx.state._id,
            },
          },
          {
            fk_id_est: ctx.state._id,
            fk_id_grup: Number(ctx.params.groupId),
          },
        ],
      },
    });
    console.log(group);
    return await ctx.next();
  } catch (error) {
    console.error(error);

    return new Response(null, {
      status: 303,
      headers: {
        "Location": "/gestionar-grupos/",
      },
    });
  }
}
