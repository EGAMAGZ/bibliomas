import { Signal } from "@preact/signals";
import { GroupWithBibliographies } from "@/schema/groups.ts";
import { GroupManagementStates } from "@/schema/states.ts";
import CreateGroupCard from "@/islands/gg-cu/CreateGroupCard.tsx";

interface ListGroupProps {
  groups: Signal<GroupWithBibliographies[]>;
  managerState: Signal<GroupManagementStates>;
  deletableGroupId: Signal<number | null>;
}

export default function ListGroups(props: ListGroupProps) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {props.groups.value.map((group) => (
        <div>
          <span>{group.txt_nom_grup} - {group.Bibliografias.length}</span>
        </div>
      ))}

      {props.managerState.value === GroupManagementStates.CREATING && (
        <CreateGroupCard
          groups={props.groups}
          managerState={props.managerState}
        />
      )}
    </div>
  );
}
