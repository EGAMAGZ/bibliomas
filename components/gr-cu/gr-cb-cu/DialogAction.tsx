import Button from "@/components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface DialogActionProps {
  onCancel: () => void;
  disabled: boolean;
  loading: boolean;
}

export default function DialogAction(
  { onCancel, disabled, loading }: DialogActionProps,
) {
  return (
    <div className="flex justify-center">
      <div className="flex gap-4">
        <Button
          state="btn-primary"
          type="submit"
          disabled={disabled}
          loading={loading}
        >
          <span>Aceptar</span>
        </Button>
        <Button
          state="btn-secondary"
          type="button"
          onClick={onCancel}
          disabled={disabled}
        >
          <span>Cancelar</span>
        </Button>
      </div>
    </div>
  );
}
