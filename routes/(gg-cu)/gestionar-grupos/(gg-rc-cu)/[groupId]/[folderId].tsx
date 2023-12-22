import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Data } from "@/schema/data.ts";
import { FolderWithBibliographies } from "@/schema/folder.ts";
import SessionState from "@/schema/session-state.ts";
import { useSignal } from "@preact/signals";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";
import CreateFolderButton from "@/islands/gc-cu/CreateFolderButton.tsx";
import DeleteFolderDialog from "@/islands/gc-cu/DeleteFolderDialog.tsx";
import ListFolders from "@/islands/gc-cu/ListFolders.tsx";
import { FolderManagementStates } from "@/schema/states.ts";
import prismaClient from "@/database/prisma.ts";
import ReferencesManagement from "@/islands/gr-cu/ReferencesManagement.tsx";
export default function ManageFoldersGroupPage(
  props: PageProps<Data, SessionState>,
) {
  return (
    <div class="flex justify-center">
      <div class="container p-4 2xl:p-0 flex flex-col items-center">
        <span class="text-2xl lg:text-6xl font-sans font-bold mt-8 mb-16">
          Gestionar referencias por carpeta del grupo
        </span>
        <BibliomasSessionProvider
          value={{
            userId: props.state._id,
            folderId: Number(props.params.folderId),
            groupId: Number(props.params.groupId),
          }}
        >
          <ReferencesManagement />
        </BibliomasSessionProvider>
        <div class="flex w-full flex-col lg:flex-row justify-center gap-4 mt-4">
          <a
            href={`/gestionar-grupos/${props.params.groupId}`}
            class="btn btn-secondary font-sans lg:w-fit"
          >
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
}
