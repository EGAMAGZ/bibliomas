import { Signal, useSignal } from "@preact/signals";
import { Ref } from "preact";
import Button from "@/components/Button.tsx";
import { TYPE_PUBLICATION, TypePublication } from "@/schema/bibliographie.ts";
import {
  BookForm,
  MoreForm,
  WebSiteForm,
} from "@/islands/gr-cu/gr-cb-cu/ReferenceForm.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

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

  const isLoading = useSignal(false);

  return (
    <dialog ref={refDialog} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <form
          onSubmit={onSubmit}
        >
          <Tabs disabled={isLoading.value} typePublication={typePublication} />
          <Form
            disabled={isLoading.value}
            typePublication={typePublication.value}
          />
          <div class="flex justify-center">
            <div class="flex gap-4">
              <Button state="btn-primary" type="submit">
                <span>Aceptar</span>
              </Button>
              <Button
                state="btn-secondary"
                type="button"
                onClick={onCancel}
              >
                <span>Cancelar</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

interface FormProps {
  typePublication: TypePublication;
  disabled: boolean;
}
function Form(
  { disabled, typePublication }: FormProps,
) {
  function form() {
    switch (typePublication) {
      case TYPE_PUBLICATION.Libro:
        return <WebSiteForm />;
      case TYPE_PUBLICATION.SitioWeb:
        return <BookForm />;
      case TYPE_PUBLICATION.Mas:
        return <MoreForm />;
      default:
        return <span>Tipo de publicacion invalido</span>;
    }
  }
  return (
    <div>
      {form()}
    </div>
  );
}

interface TabsProps {
  typePublication: Signal<TypePublication>;
  disabled: boolean;
}

function Tabs({ disabled, typePublication }: TabsProps) {
  return (
    <div class="tabs tabs-boxed font-mono">
      <button
        class={`tab ${
          typePublication.value === TYPE_PUBLICATION.SitioWeb
            ? "tab-active"
            : ""
        }`}
        onClick={() => typePublication.value = TYPE_PUBLICATION.SitioWeb}
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Sitio web
      </button>
      <button
        class={`tab ${
          typePublication.value === TYPE_PUBLICATION.Libro ? "tab-active" : ""
        }`}
        onClick={() => typePublication.value = TYPE_PUBLICATION.Libro}
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Libro
      </button>
      <button
        class={`tab ${
          typePublication.value === TYPE_PUBLICATION.Mas ? "tab-active" : ""
        }`}
        onClick={() => typePublication.value = TYPE_PUBLICATION.Mas}
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Más
      </button>
      <button
        class="tab"
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Ayuda
      </button>
    </div>
  );
}
