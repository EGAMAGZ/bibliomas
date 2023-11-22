import Button from "@/components/Button.tsx";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";

interface CreateReferenceButtonProps {
  disabled: boolean;
}

export default function CreateReferenceButton(
  { disabled }: CreateReferenceButtonProps,
) {
  const dialog = useRef<HTMLDialogElement>(null);
  
  function handleClick() {
    dialog.current?.showModal();
  }

  function handleCancel() {
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
      <dialog ref={dialog} class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <form>
            <div class="tabs tabs-boxed font-mono">
              {/* <button
                class={`tab ${
                  tipoPublicacion.value === TipoPublicacion.SitioWeb
                    ? "tab-active"
                    : ""
                }`}
                onClick={() => tipoPublicacion.value = TipoPublicacion.SitioWeb}
                type="button"
              >
                Sitio web
              </button>
              <button
                class={`tab ${
                  tipoPublicacion.value === TipoPublicacion.Libro
                    ? "tab-active"
                    : ""
                }`}
                onClick={() => tipoPublicacion.value = TipoPublicacion.Libro}
                type="button"
              >
                Libro
              </button>
              <button
                class={`tab ${
                  tipoPublicacion.value === TipoPublicacion.Mas
                    ? "tab-active"
                    : ""
                }`}
                onClick={() => tipoPublicacion.value = TipoPublicacion.Mas}
                type="button"
              >
                Más
              </button> */}
              <button
                class="tab"
                type="button"
              >
                Ayuda
              </button>
            </div>
            <div>
            </div>
          </form>
          <div class="join">
            <Button state="btn-primary" classList="join-item" type="button">
              <span>Aceptar</span>
            </Button>
            <Button state="btn-secondary" classList="join-item" type="button">
              <span>Cancelar</span>
            </Button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
