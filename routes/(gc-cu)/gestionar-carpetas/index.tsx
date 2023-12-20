import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import { Carpetas } from "@/generated/client/deno/edge.ts";
import prismaClient from "@/database/prisma.ts";

export const handler: Handlers<Data<Carpetas[]>, SessionState> = {
  async GET(_req, ctx: HandlerContext<Data<Carpetas[]>, SessionState>) {
    const userId = ctx.state._id;

    const folders = await prismaClient.carpetas.findMany({
      where: {
        fk_id_est: userId,
        fk_id_grup: null,
      },
    });
    return await ctx.render({
      data: folders,
      error: "",
    });
  },
};

export default function GestionarCarpetasPage(
  props: PageProps<Data<Carpetas[]>, SessionState>,
) {
  return (
    <div className="flex justify-center">
      <div className="container p-4 2xl:p-0 flex flex-col ">
        <span className="text-4xl lg:text-6xl font-sans font-bold mt-8 mb-16 self-center">
          Gestionar Carpetas
        </span>
        <div>
          Hola {props.data.data.length}
        </div>
      </div>
    </div>
  );
}
