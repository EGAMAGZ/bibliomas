import { Signal, useSignal } from "@preact/signals";
import { GroupWithBibliographies } from "@/schema/groups.ts";
import { GroupManagementStates } from "@/schema/states.ts";
import CreateGroupCard from "@/islands/gg-cu/CreateGroupCard.tsx";
import GroupCard from "@/islands/gg-cu/GroupCard.tsx";
import InvitationDialog from "@/islands/gg-cu/InvitationDialog.tsx";

interface ListGroupProps {
  groups: Signal<GroupWithBibliographies[]>;
  managerState: Signal<GroupManagementStates>;
  deletableGroupId: Signal<number | null>;
}

export default function ListGroups(props: ListGroupProps) {
  const createdGroupId = useSignal<number | null>(null);

  const editableAccessGroupId = useSignal<number | null>(null);

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {props.groups.value.map((group) => (
          <GroupCard
            group={group}
            managerState={props.managerState}
            groups={props.groups}
            onDelete={(id) => props.deletableGroupId.value = id}
            onEditAccess={(id) => editableAccessGroupId.value = id}
          />
        ))}

        {props.managerState.value === GroupManagementStates.CREATING && (
          <CreateGroupCard
            groups={props.groups}
            managerState={props.managerState}
            onAfterCreate={(id) => createdGroupId.value = id}
          />
        )}
      </div>
      {createdGroupId.value && <InvitationDialog groupId={createdGroupId} />}

      {editableAccessGroupId.value && (
        <InvitationDialog groupId={editableAccessGroupId} />
      )}
    </>
  );
}
