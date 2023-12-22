import { IS_BROWSER } from "$fresh/runtime.ts";
import { Ref } from "preact";
import Button from "@/components/Button.tsx";

interface ConfirmDialogProps {
  dialogRef: Ref<HTMLDialogElement>;
  onAccept: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  acceptText?: string;
  cancelText?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
  return (
    <dialog ref={props.dialogRef} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg font-sans">{props.title}</h3>
        <p class="font-sans">
          {props.message}
        </p>
        <div class="modal-action">
          <Button
            type="button"
            onClick={props.onAccept}
            state="btn-primary"
            disabled={props.disabled || props.loading}
            loading={props.loading}
          >
            {props.acceptText ?? "Aceptar"}
          </Button>
          <Button
            type="button"
            onClick={props.onCancel}
            state="btn-secondary"
            disabled={props.disabled || props.loading}
          >
            {props.cancelText ?? "Cancelar"}
          </Button>
        </div>
      </div>
    </dialog>
  );
}
