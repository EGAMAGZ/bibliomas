import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import { FolderWithBibliographies } from "@/schema/folder.ts";
import { useSignal } from "@preact/signals";
import { FolderManagementStates } from "@/schema/states.ts";
import prismaClient from "@/database/prisma.ts";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";
import CreateFolderButton from "@/islands/gc-cu/CreateFolderButton.tsx";
import DeleteFolderDialog from "@/islands/gc-cu/DeleteFolderDialog.tsx";
import ListFolders from "@/islands/gc-cu/ListFolders.tsx";
import ReferencesManagement from "@/islands/gr-cu/ReferencesManagement.tsx";

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
          fk_id_grup: Number(ctx.params.groupId),
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

export default function ManageFoldersGroupPage(
  props: PageProps<Data<FolderWithBibliographies[]>, SessionState>,
) {
  const managerState = useSignal<FolderManagementStates>(
    FolderManagementStates.IDLE,
  );
  const folders = useSignal(props.data.data);

  const deletableFolderId = useSignal<number | null>(null);

  return (
    <span>
      <div className="flex justify-center">
        <div className="container p-4 2xl:p-0 flex flex-col ">
          <span className="text-2xl lg:text-6xl font-sans font-bold mt-8 mb-16 self-center">
            Gestionar referencias y carpetas de grupo
          </span>
          <BibliomasSessionProvider
            value={{
              userId: props.state._id,
              groupId: Number(props.params.groupId),
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
            <DeleteFolderDialog
              folders={folders}
              folderId={deletableFolderId}
            />
                <ReferencesManagement />
                <div class="flex w-full flex-col lg:flex-row justify-center gap-4 mt-4">
                  <a
                    href={`/gestionar-grupos/${props.params.groupId}`}
                    class="btn btn-secondary font-sans lg:w-fit"
                  >
                    Regresar
                  </a>
                </div>
          </BibliomasSessionProvider>
          {/* <BibliomasSessionProvider
            value={{
              userId: props.state._id,
              groupId: Number(props.params.groupId),
            }}
          >
          </BibliomasSessionProvider> */}
        </div>
      </div>
    </span>
  );
}
