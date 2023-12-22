import { Signal, useComputed } from "@preact/signals";
import { FolderManagementStates, GroupManagementStates } from "@/schema/states.ts";
import Button from "@/components/Button.tsx";

interface CreateGroupButtonProps {
  managerState: Signal<GroupManagementStates>;
}

export default function CreateGroupButton(props: CreateGroupButtonProps) {
  const disabled = useComputed(() => {
    return props.managerState.value !== GroupManagementStates.IDLE;
  });

  const handleClick = () => {
    props.managerState.value = GroupManagementStates.CREATING;
  };

  return (
    <Button
      state="btn-primary"
      type="button"
      onClick={handleClick}
      disabled={disabled.value}
    >
      <span>Crear grupo</span>
    </Button>
  );
}
