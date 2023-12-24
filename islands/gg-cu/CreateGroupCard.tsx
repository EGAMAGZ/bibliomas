import { EditableGroupCard } from "@/components/gg-cu/EditableGroupCard.tsx";
import { Form } from "formika";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { CreateGroupSchema, GroupWithBibliographies } from "@/schema/groups.ts";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import FormControl from "@/components/FormControl.tsx";
import Button from "@/components/Button.tsx";
import { GroupManagementStates } from "@/schema/states.ts";
import { ApiResponse } from "@/schema/api-response.ts";

interface CreateGroupCardProps {
  groups: Signal<GroupWithBibliographies[]>;
  managerState: Signal<GroupManagementStates>;
  onAfterCreate: (groupId: number) => void;
}

export default function CreateGroupCard(props: CreateGroupCardProps) {
  const bibliomasSessionContext = useBibliomasSessionContext();
  const isLoading = useSignal(false);

  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    CreateGroupSchema,
    {
      txt_nom_grup: "",
      fk_id_est: bibliomasSessionContext.userId,
    },
    async (formData) => {
      isLoading.value = true;
      const response = await fetch("/api/group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        return;
      }

      const { data } = (await response.json()) as ApiResponse<
        GroupWithBibliographies
      >;

      props.groups.value = [...props.groups.value, data];
      isLoading.value = false;
      props.managerState.value = GroupManagementStates.IDLE;
      props.onAfterCreate(data.pk_id_grup);
    },
  );

  const handleCancel = () => {
    props.managerState.value = GroupManagementStates.IDLE;
  };
  return (
    <EditableGroupCard>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div class="flex flex-col gap-1">
          <FormControl
            label="Nombre de Grupo:"
            error={errors.value.txt_nom_grup}
            required
          >
            <input
              type="text"
              class="input input-primary input-sm"
              name="txt_nom_grup"
              required
            />
          </FormControl>

          <Button
            type="submit"
            state="btn-primary"
            classList="btn-sm"
            disabled={isLoading.value}
            loading={isLoading.value}
          >
            Crear Grupo
          </Button>
          <Button
            type="button"
            state="btn-secondary"
            classList="btn-sm"
            disabled={isLoading.value}
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </div>
      </Form>
    </EditableGroupCard>
  );
}
