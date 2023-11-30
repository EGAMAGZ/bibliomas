import Button from "@/components/Button.tsx";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import { TYPE_PUBLICATION, TypePublication } from "@/schema/bibliographie.ts";
import ReferenceDialog from "./ReferenceDialog.tsx";

interface CreateReferenceButtonProps {
  disabled: boolean;
}

export default function CreateReferenceButton(
  { disabled }: CreateReferenceButtonProps,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  function handleCreate() {
    dialog.current?.showModal();
  }

  function handleCancel() {
    dialog.current?.close();
  }

  function handleSubmit() {
    console.log("ASD");
    
    dialog.current?.close();
  }

  return (
    <>
      <Button
        state="btn-primary"
        type="button"
        disabled={disabled}
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
