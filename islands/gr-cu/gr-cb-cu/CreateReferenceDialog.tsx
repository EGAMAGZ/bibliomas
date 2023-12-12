import { Ref } from "preact";
import ReferenceDialog from "@/islands/gr-cu/gr-cb-cu/ReferenceDialog.tsx";
import { useSignal } from "@preact/signals";

interface CreateReferenceDialogProps {
  dialogRef: Ref<HTMLDialogElement>;
  onSubmit: () => void;
  onCancel: () => void;
}
export default function CreateReferenceDialog(
  props: CreateReferenceDialogProps,
) {
  const isLoading = useSignal(false);
  return (
    <ReferenceDialog
      dialogRef={props.dialogRef}
      onSubmit={props.onSubmit}
      onCancel={props.onCancel}
      loading={isLoading}
    />
  );
}
