import Button from "@/components/Button.tsx";
import { useRef } from "preact/hooks";
import ReferenceDialog from "./ReferenceDialog.tsx";

export default function CreateReferenceButton() {
  const dialog = useRef<HTMLDialogElement>(null);

  function handleCreate() {
    dialog.current?.showModal();
  }

  function handleCancel() {
    dialog.current?.close();
  }

  function handleSubmit() {
    dialog.current?.close();
  }

  return (
    <>
      <Button
        state="btn-primary"
        type="button"
        onClick={handleCreate}
      >
        <span>Crear refencia</span>
      </Button>

      <ReferenceDialog
        dialogRef={dialog}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}
