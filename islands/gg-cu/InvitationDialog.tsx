import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { useRef } from "preact/hooks";
import { Estudiantes } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { IconCirclePlus, IconUser } from "@tabler-icons";
import AddCollaboratorButton from "@/islands/gg-cu/AddCollaboratorButton.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { StudentWithAccess } from "@/schema/group-with-access.ts";

interface InvitationDialogProps {
  groupId: Signal<number | null>;
}

export default function InvitationDialog(props: InvitationDialogProps) {
  const bibliomasSessionContext = useBibliomasSessionContext();
  const isLoading = useSignal(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const collaborators = useSignal<StudentWithAccess[]>([]);

  useSignalEffect(() => {
    const fetchCollaborators = async () => {
      if (!props.groupId.value) {
        return;
      }
      isLoading.value = true;
      const searchParams = new URLSearchParams();
      searchParams.set("groupId", props.groupId.value.toString());
      searchParams.set("userId", bibliomasSessionContext.userId);

      const response = await fetch(
        `/api/group/invitation?${searchParams.toString()}`,
      );

      if (response.ok) {
        const { data } = (await response.json()) as ApiResponse<
          StudentWithAccess[]
        >;
        collaborators.value = data;
      }

      isLoading.value = false;
    };

    fetchCollaborators();
  });

  useSignalEffect(() => {
    if (props.groupId.value) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  });

  const handleClose = () => {
    props.groupId.value = null;
  };

  return (
    <dialog ref={dialogRef} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg font-sans">Compartir acceso</h3>
        <div class="max-h-40 overflow-y-auto flex flex-col divide-y-1 gap-2">
          {collaborators.value.map((collaborator) => (
            <InvitationRow studentWithAccess={collaborator} />
          ))}
        </div>
        <div class="modal-action">
          <button
            class="btn btn-primary font-sans"
            onClick={handleClose}
            type="button"
          >
            Cerrar
          </button>
        </div>
      </div>
    </dialog>
  );
}

interface InvitationRowProps {
  studentWithAccess: StudentWithAccess;
}

function InvitationRow(props: InvitationRowProps) {
  return (
    <div class="flex gap-4 items-center">
      <IconUser size={24} />
      <span class="flex-1 font-sans">
        {props.studentWithAccess.txt_user_est}
      </span>
      <AddCollaboratorButton studentWithAccess={props.studentWithAccess} />
    </div>
  );
}
