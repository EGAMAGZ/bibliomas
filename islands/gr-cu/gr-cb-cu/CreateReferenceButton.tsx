import Button from "@/components/Button.tsx";
import { useRef } from "preact/hooks";
import CreateReferenceDialog from "@/islands/gr-cu/gr-cb-cu/CreateReferenceDialog.tsx";

interface CreateReferenceButtonProps {
  onSubmit: () => void;
  classList?: string;
}

export default function CreateReferenceButton(
  { onSubmit, classList }: CreateReferenceButtonProps,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  function handleCreate() {
    dialog.current?.showModal();
  }

  function handleCancel() {
    dialog.current?.close();
  }

  function handleSubmit() {
    onSubmit();
    dialog.current?.close();
  }

  return (
    <>
      <Button
        state="btn-primary"
        type="button"
        onClick={handleCreate}
        classList={classList}
      >
        <span>Crear refencia</span>
      </Button>

      <CreateReferenceDialog
        dialogRef={dialog}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}
