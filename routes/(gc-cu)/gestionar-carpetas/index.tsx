import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import prismaClient from "@/database/prisma.ts";
import CreateFolderButton from "@/islands/gc-cu/CreateFolderButton.tsx";
import { useSignal } from "@preact/signals";
import { FolderManagementStates } from "@/schema/states.ts";
import ListFolders from "@/islands/gc-cu/ListFolders.tsx";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";
import { FolderWithBibliographies } from "@/schema/folder.ts";
import DeleteFolderDialog from "@/islands/gc-cu/DeleteFolderDialog.tsx";

export const handler: Handlers<Data<FolderWithBibliographies[]>, SessionState> =
  {
    async GET(
      _req,
      ctx: HandlerContext<Data<FolderWithBibliographies[]>, SessionState>,
    ) {
      const userId = ctx.state._id;

      const folders = await prismaClient.carpetas.findMany({
        where: {
          fk_id_est: userId,
          fk_id_grup: null,
        },
        include: {
          Bibliografias: true,
        },
      });
      return await ctx.render({
        data: folders,
        error: "",
      });
    },
  };

export default function GestionarCarpetasPage(
  props: PageProps<Data<FolderWithBibliographies[]>, SessionState>,
) {
  const managerState = useSignal<FolderManagementStates>(
    FolderManagementStates.IDLE,
  );
  const folders = useSignal(props.data.data);

  const deletableFolderId = useSignal<number | null>(null);

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
            <div class="flex justify-end">
              <CreateFolderButton managerState={managerState} />
            </div>
            <ListFolders
              folders={folders}
              managerState={managerState}
              deletableFolderId={deletableFolderId}
            />
          </div>
          <DeleteFolderDialog folders={folders} folderId={deletableFolderId} />
        </BibliomasSessionProvider>
      </div>
    </div>
  );
}
