import { Ref } from "preact";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { TYPE_PUBLICATION, TypePublication } from "@/schema/bibliographie.ts";
import { BookForm, MoreForm, WebSiteForm } from "./UpdateReferenceForm.tsx";
import { useRef } from "preact/hooks";
import { Bibliografias } from "@/generated/client/deno/edge.ts";

interface UpdateReferenceDialogProps {
  onSubmit: () => void;
  bibliography: Signal<Bibliografias | null>;
}
export default function UpdateReferenceDialog(
  props: UpdateReferenceDialogProps,
) {
  const isLoading = useSignal(false);
  const typePublication = useSignal<TypePublication>(
    TYPE_PUBLICATION.SitioWeb,
  );

  const dialogRef = useRef<HTMLDialogElement>(null);

  useSignalEffect(() => {
    if (props.bibliography.value) {
      typePublication.value = props.bibliography.value.txt_tip_biblio;
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  });

  const handleSubmit = () => {
    props.bibliography.value = null;
    props.onSubmit();
  };

  const handleCancel = () => {
    props.bibliography.value = null;
  };

  return (
    <ReferenceDialog
      dialogRef={dialogRef}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      loading={isLoading}
      bibliography={props.bibliography}
      typePublication={typePublication}
    />
  );
}

interface ReferenceDialogProps {
  dialogRef: Ref<HTMLDialogElement>;
  onSubmit: () => void;
  onCancel: () => void;
  loading: Signal<boolean>;
  bibliography: Signal<Bibliografias | null>;
  typePublication: Signal<TypePublication>;
}

function ReferenceDialog(
  props: ReferenceDialogProps,
) {
  return (
    <dialog
      ref={props.dialogRef}
      className="modal modal-bottom sm:modal-middle"
      onClose={props.onCancel}
    >
      <div className="modal-box">
        <Tabs
          disabled={props.loading.value}
          typePublication={props.typePublication}
        />
        <Form
          loading={props.loading}
          typePublication={props.typePublication}
          bibliography={props.bibliography}
          onCancel={props.onCancel}
          onSubmit={props.onSubmit}
        />
      </div>
    </dialog>
  );
}

interface FormProps {
  loading: Signal<boolean>;
  typePublication: Signal<TypePublication>;
  bibliography: Signal<Bibliografias | null>;
  onCancel: () => void;
  onSubmit: () => void;
}

function Form(
  props: FormProps,
) {
  const handleSubmit = () => {
    props.typePublication.value = TYPE_PUBLICATION.SitioWeb;
    props.onSubmit();
  };

  function form() {
    switch (props.typePublication.value) {
      case TYPE_PUBLICATION.SitioWeb:
        return (
          <WebSiteForm
            loading={props.loading}
            onCancel={props.onCancel}
            onSubmit={handleSubmit}
            bibliography={props.bibliography}
          />
        );
      case TYPE_PUBLICATION.Libro:
        return (
          <BookForm
            loading={props.loading}
            onCancel={props.onCancel}
            onSubmit={handleSubmit}
            bibliography={props.bibliography}
          />
        );
      default:
        return (
          <MoreForm
            loading={props.loading}
            onCancel={props.onCancel}
            onSubmit={handleSubmit}
            bibliography={props.bibliography}
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
