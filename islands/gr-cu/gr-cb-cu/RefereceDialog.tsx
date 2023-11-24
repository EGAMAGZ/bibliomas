import { useSignal } from "@preact/signals";
import { Ref } from "preact";
import Button from "@/components/Button.tsx";
import { TYPE_PUBLICATION, TypePublication } from "@/schema/bibliographie.ts";

interface ReferenceDialogProps {
  refDialog: Ref<HTMLDialogElement>;
  onSubmit: (event: Event) => void;
  onCancel: () => void;
}

export default function ReferenceDialog(
  { onCancel, onSubmit, refDialog }: ReferenceDialogProps,
) {
  const typePublication = useSignal<TypePublication>(
    TYPE_PUBLICATION.SitioWeb,
  );

  const form = () => {
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
  };

  return (
    <dialog ref={refDialog} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <form
          onSubmit={onSubmit}
        >
          <div class="tabs tabs-boxed font-mono">
            <button
              class={`tab ${
                typePublication.value === TYPE_PUBLICATION.SitioWeb
                  ? "tab-active"
                  : ""
              }`}
              onClick={() => typePublication.value = TYPE_PUBLICATION.SitioWeb}
              type="button"
            >
              Sitio web
            </button>
            <button
              class={`tab ${
                typePublication.value === TYPE_PUBLICATION.Libro
                  ? "tab-active"
                  : ""
              }`}
              onClick={() => typePublication.value = TYPE_PUBLICATION.Libro}
              type="button"
            >
              Libro
            </button>
            <button
              class={`tab ${
                typePublication.value === TYPE_PUBLICATION.Mas
                  ? "tab-active"
                  : ""
              }`}
              onClick={() => typePublication.value = TYPE_PUBLICATION.Mas}
              type="button"
            >
              Más
            </button>
            <button
              class="tab"
              type="button"
            >
              Ayuda
            </button>
          </div>
          <div>
            {form()}
          </div>
          <div class="join">
            <Button state="btn-primary" classList="join-item" type="submit">
              <span>Aceptar</span>
            </Button>
            <Button
              state="btn-secondary"
              classList="join-item"
              type="button"
              onClick={onCancel}
            >
              <span>Cancelar</span>
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
