import { Carpetas } from "@/generated/client/deno/edge.ts";
import { Signal } from "@preact/signals";
import { FolderManagementStates } from "@/schema/states.ts";
import CreateFolderCard from "@/islands/gc-cu/CreateFolderCard.tsx";

interface ListFoldersProps {
  folders: Signal<Carpetas[]>;
  managerState: Signal<FolderManagementStates>;
}

export default function ListFolders(props: ListFoldersProps) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <span>{props.folders.value.length}</span>
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
