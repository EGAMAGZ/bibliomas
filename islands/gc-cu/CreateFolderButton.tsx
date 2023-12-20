import Button from "@/components/Button.tsx";
import { Signal, useComputed } from "@preact/signals";
import { FolderManagementStates } from "@/schema/states.ts";

interface CreateFolderButtonProps {
  managerState: Signal<FolderManagementStates>;
}

export default function CreateFolderButton(props: CreateFolderButtonProps) {
  const disabled = useComputed(() => {
    return props.managerState.value !== FolderManagementStates.IDLE;
  });
  return (
    <Button
      state="btn-primary"
      type="button"
      onClick={() => {
        props.managerState.value = FolderManagementStates.CREATING;
      }}
      disabled={disabled.value}
    >
      <span>Crear refencia</span>
    </Button>
  );
}
