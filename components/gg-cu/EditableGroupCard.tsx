import { IconUsersGroup } from "@tabler-icons";
import { ComponentChildren } from "preact";

interface EditableGroupCardProps {
  children: ComponentChildren;
}

export function EditableGroupCard(props: EditableGroupCardProps) {
  return (
    <div class="card bg-neutral text-neutral-content">
      <div class="flex justify-center items-center p-4 gap-1">
        <IconUsersGroup size={96} />
        {props.children}
      </div>
    </div>
  );
}
