import { Signal, useSignal } from "@preact/signals";
import { Ref } from "preact";
import { TYPE_PUBLICATION, TypePublication } from "@/schema/bibliographie.ts";
import {
  BookForm,
  MoreForm,
  WebSiteForm,
} from "@/islands/gr-cu/gr-cb-cu/ReferenceForm.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ReferenceDialogProps {
  dialogRef: Ref<HTMLDialogElement>;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function ReferenceDialog(
  { onCancel, onSubmit, dialogRef }: ReferenceDialogProps,
) {
  const typePublication = useSignal<TypePublication>(
    TYPE_PUBLICATION.SitioWeb,
  );

  const isLoading = useSignal(false);

  return (
    <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <Tabs disabled={isLoading.value} typePublication={typePublication} />
        <Form
          loading={isLoading}
          typePublication={typePublication}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </div>
      <form method="dialog" class="modal-backdrop">
        <button disabled={isLoading.value}>close</button>
      </form>
    </dialog>
  );
}

interface FormProps {
  typePublication: Signal<TypePublication>;
  loading: Signal<boolean>;
  onCancel: () => void;
  onSubmit: () => void;
}

function Form(
  { loading, typePublication, onCancel, onSubmit }: FormProps,
) {
  const handleSubmit = () => {
    typePublication.value = TYPE_PUBLICATION.SitioWeb;
    onSubmit();
  };

  function form() {
    switch (typePublication.value) {
      case TYPE_PUBLICATION.SitioWeb:
        return (
          <WebSiteForm
            loading={loading}
            onCancel={onCancel}
            onSubmit={handleSubmit}
          />
        );
      case TYPE_PUBLICATION.Libro:
        return (
          <BookForm
            loading={loading}
            onCancel={onCancel}
            onSubmit={handleSubmit}
          />
        );
      default:
        return (
          <MoreForm
            loading={loading}
            onCancel={onCancel}
            onSubmit={handleSubmit}
          />
        );
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
    <div className="tabs tabs-boxed font-mono bg-gray-200">
      <button
        className={`tab ${
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
        className={`tab ${
          typePublication.value === TYPE_PUBLICATION.Libro ? "tab-active" : ""
        }`}
        onClick={() => typePublication.value = TYPE_PUBLICATION.Libro}
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Libro
      </button>
      <button
        className={`tab ${
          (typePublication.value !== TYPE_PUBLICATION.SitioWeb &&
              typePublication.value !== TYPE_PUBLICATION.Libro)
            ? "tab-active"
            : ""
        }`}
        onClick={() => typePublication.value = TYPE_PUBLICATION.ArticuloRevista}
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Más
      </button>
      <button
        className="tab"
        type="button"
        disabled={!IS_BROWSER || disabled}
      >
        Ayuda
      </button>
    </div>
  );
}
