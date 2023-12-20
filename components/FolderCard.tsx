import { IconFolder } from "@tabler-icons";
import { ComponentChildren } from "preact";

interface EditableFolderCardProps {
  children: ComponentChildren;
}

export function EditableFolderCard(props: EditableFolderCardProps) {
  return (
    <div class="card bg-neutral text-neutral-content">
      <div class="flex justify-center items-center p-4 gap-1">
        <IconFolder size={96} />
        {props.children}
      </div>
    </div>
  );
}
