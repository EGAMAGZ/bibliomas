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
  const typePublication = useSignal<TypePublication>(
    TYPE_PUBLICATION.SitioWeb,
  );

  const dialog = useRef<HTMLDialogElement>(null);

  function handleClick() {
    dialog.current?.showModal();
  }

  function handleCancel() {
    dialog.current?.close();
  }

  function form() {
    switch (typePublication.value) {
      case TYPE_PUBLICATION.Libro:
        return <span>Libro</span>;
      case TYPE_PUBLICATION.SitioWeb:
        return <span>Sitio web</span>;
      case TYPE_PUBLICATION.Mas:
        return <span>Mas</span>;
      default:
        return <span>Tipo de publicacion invalido</span>;
    }
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
        onClick={handleClick}
      >
        <span>Crear refencia</span>
      </Button>
      
      <ReferenceDialog
        refDialog={dialog}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </>
  );
}
