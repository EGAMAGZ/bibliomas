import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { useRef } from "preact/hooks";
import Button from "@/components/Button.tsx";
import { FolderWithBibliographies } from "@/schema/folder.ts";

interface DeleteFolderDialogProps {
  folderId: Signal<number | null>;
  folders: Signal<FolderWithBibliographies[]>;
}

export default function DeleteFolderDialog(props: DeleteFolderDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    if (props.folderId.value) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  });

  const deleteFolder = async () => {
    isLoading.value = true;
    const response = await fetch(
      `/api/folder/${props.folderId.value}`,
      {
        method: "DELETE",
      },
    );
    if (!response.ok) {
      return;
    }

    isLoading.value = false;
  };

  const handleDelete = () => {
    deleteFolder();

    props.folders.value = props.folders.value.filter(
      (folder) => folder.pk_id_carp !== props.folderId.value,
    );
    props.folderId.value = null;
  };

  const handleCancel = () => {
    props.folderId.value = null;
  };

  return (
    <dialog ref={dialogRef} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg font-sans">Eliminar Carpeta</h3>
        <p class="font-sans">
          ¿Está seguro de que desea eliminar esta carpeta?
        </p>
        <div class="modal-action">
          <Button
            type="button"
            onClick={handleDelete}
            state="btn-primary"
            disabled={isLoading.value}
            loading={isLoading.value}
          >
            Eliminar
          </Button>
          <Button
            type="button"
            onClick={handleCancel}
            state="btn-secondary"
            disabled={isLoading.value}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </dialog>
  );
}
