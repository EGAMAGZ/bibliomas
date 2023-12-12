import ConfirmDialog from "@/components/ConfirmDialog.tsx";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { useRef } from "preact/hooks";

interface DeleteReferenceDialog {
  bibliographyId: Signal<number | null>;
  onAccept: () => void;
}

export default function DeleteReferenceDialog(props: DeleteReferenceDialog) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const isLoading = useSignal(false);

  useSignalEffect(() => {
    if (props.bibliographyId.value) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  });

  const deleteBibliographie = async () => {
    isLoading.value = true;
    const response = await fetch(
      `/api/bibliographie/${props.bibliographyId.value}`,
      {
        method: "DELETE",
      },
    );
    if (response.status === 200) {
      props.onAccept();
    }
    isLoading.value = false;
  };

  const handleAccept = () => {
    deleteBibliographie();

    props.bibliographyId.value = null;
    props.onAccept();
  };

  const handleCancel = () => {
    props.bibliographyId.value = null;
  };

  return (
    <>
      <ConfirmDialog
        dialogRef={dialogRef}
        title="Eliminar Referencia"
        message="¿Está seguro de que desea eliminar esta referencia?"
        onAccept={handleAccept}
        onCancel={handleCancel}
        loading={isLoading.value}
        disabled={isLoading.value}
      />
    </>
  );
}
