import { IconButton } from "@/components/Button.tsx";
import { IconCirclePlus, IconCircleX } from "@tabler-icons";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Estudiantes } from "@/generated/client/deno/edge.ts";
import { StudentWithAccess } from "@/schema/group-with-access.ts";
import { ApiResponse } from "@/schema/api-response.ts";

interface AddCollaboratorButtonProps {
  studentWithAccess: StudentWithAccess;
}

export default function AddCollaboratorButton(
  props: AddCollaboratorButtonProps,
) {
  const isLoading = useSignal(false);
  const hasAccess = useSignal(props.studentWithAccess.bool_access_grup);

  const addAccess = async () => {
    isLoading.value = true;
    const response = await fetch(
      `/api/group/invitation/${props.studentWithAccess.fk_id_grup}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fk_id_est: props.studentWithAccess.fk_id_est,
        }),
      },
    );

    if (response.ok) {
      const { data } = (await response.json()) as ApiResponse<
        StudentWithAccess
      >;
      hasAccess.value = data.bool_access_grup;
    }

    isLoading.value = false;
  };

  const removeAccess = async () => {
    isLoading.value = true;
    const response = await fetch(
      `/api/group/invitation/${props.studentWithAccess.fk_id_grup}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fk_id_est: props.studentWithAccess.fk_id_est,
        }),
      },
    );

    if (response.ok) {
      const { data } = (await response.json()) as ApiResponse<
        StudentWithAccess
      >;
      hasAccess.value = data.bool_access_grup;
    }

    isLoading.value = false;
  };

  const handleClick = () => {
    if (hasAccess.value) {
      removeAccess();
    } else {
      addAccess();
    }
  };

  return (
    <button
      class="btn btn-circle btn-sm btn-secondary"
      onClick={handleClick}
      type="button"
      disabled={!IS_BROWSER || isLoading.value}
    >
      {isLoading.value
        ? (
          <>
            <span className="loading loading-spinner"></span>
          </>
        )
        : hasAccess.value
        ? <IconCircleX size={24} />
        : <IconCirclePlus size={24} />}
    </button>
  );
}
