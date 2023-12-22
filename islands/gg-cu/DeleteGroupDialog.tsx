import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { GroupWithBibliographies } from "@/schema/groups.ts";
import Button from "@/components/Button.tsx";
import { useRef } from "preact/hooks";

interface DeleteGroupDialogProps {
  groupId: Signal<number | null>;
  groups: Signal<GroupWithBibliographies[]>;
}

export default function DeleteGroupDialog(props: DeleteGroupDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    if (props.groupId.value) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  });

  const deleteGroup = async () => {
    isLoading.value = true;
    const response = await fetch(
      `/api/group/${props.groupId.value}`,
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
    deleteGroup();

    props.groups.value = props.groups.value.filter(
      (group) => group.pk_id_grup !== props.groupId.value,
    );

    props.groupId.value = null;
  };

  const handleCancel = () => {
    props.groupId.value = null;
  };

  return (
    <dialog ref={dialogRef} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg font-sans">Eliminar Grupo</h3>
        <p class="font-sans">
          ¿Está seguro de que desea eliminar este grupo?
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
