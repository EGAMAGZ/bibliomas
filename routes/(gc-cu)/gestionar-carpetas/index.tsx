import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import { Carpetas } from "@/generated/client/deno/edge.ts";
import prismaClient from "@/database/prisma.ts";
import CreateFolderButton from "@/islands/gc-cu/CreateFolderButton.tsx";
import { useSignal } from "@preact/signals";
import { FolderManagementStates } from "@/schema/states.ts";
import ListFolders from "@/islands/gc-cu/ListFolders.tsx";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";

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
  const managerState = useSignal<FolderManagementStates>(
    FolderManagementStates.IDLE,
  );
  const folders = useSignal(props.data.data);

  return (
    <div className="flex justify-center">
      <div className="container p-4 2xl:p-0 flex flex-col ">
        <span className="text-4xl lg:text-6xl font-sans font-bold mt-8 mb-16 self-center">
          Gestionar Carpetas
        </span>
        <BibliomasSessionProvider
          value={{
            userId: props.state._id,
          }}
        >
          <div class="flex flex-col gap-4">
            <div class="flex">
              <input
                type="text"
                class="input input-primary flex-1"
                name="txt_nom_carp"
                disabled={managerState.value !== FolderManagementStates.IDLE}
              />
              <CreateFolderButton managerState={managerState} />
            </div>
            <ListFolders folders={folders} managerState={managerState} />
          </div>
        </BibliomasSessionProvider>
      </div>
    </div>
  );
}
