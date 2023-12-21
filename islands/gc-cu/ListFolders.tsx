import { Carpetas } from "@/generated/client/deno/edge.ts";
import { Signal } from "@preact/signals";
import { FolderManagementStates } from "@/schema/states.ts";
import CreateFolderCard from "@/islands/gc-cu/CreateFolderCard.tsx";
import FolderCard from "@/islands/gc-cu/FolderCard.tsx";
import { FolderWithBibliographies } from "@/schema/folder.ts";

interface ListFoldersProps {
  folders: Signal<FolderWithBibliographies[]>;
  managerState: Signal<FolderManagementStates>;
  deletableFolderId: Signal<number | null>;
}

export default function ListFolders(props: ListFoldersProps) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {props.folders.value.map((folder) => (
        <FolderCard
          folder={folder}
          folders={props.folders}
          managerState={props.managerState}
          onDelete={(folderId) => {
            props.deletableFolderId.value = folderId;
          }}
        />
      ))}
      {props.managerState.value === FolderManagementStates.CREATING &&
        (
          <CreateFolderCard
            folders={props.folders}
            managerState={props.managerState}
          />
        )}
    </div>
  );
}
