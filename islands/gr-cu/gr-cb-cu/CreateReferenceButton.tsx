import Button from "@/components/Button.tsx";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import { TYPE_PUBLICATION, TypePublication } from "@/schema/bibliographie.ts";
import ReferenceDialog from "@/islands/gr-cu/gr-cb-cu/RefereceDialog.tsx";

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

  function handleSubmit(event: Event) {
    event.preventDefault();

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
