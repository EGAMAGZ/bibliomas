import { Signal, useSignal } from "@preact/signals";
import { GroupWithBibliographies, UpdateGroupSchema } from "@/schema/groups.ts";
import { IconEdit, IconTrash, IconUsersGroup } from "@tabler-icons";
import Button from "@/components/Button.tsx";
import { GroupManagementStates } from "@/schema/states.ts";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { ApiResponse } from "@/schema/api-response.ts";
import { EditableGroupCard } from "@/components/gg-cu/EditableGroupCard.tsx";
import { Form } from "formika";
import FormControl from "@/components/FormControl.tsx";

interface FolderCardProps {
  group: GroupWithBibliographies;
  groups: Signal<GroupWithBibliographies[]>;
  managerState: Signal<GroupManagementStates>;
  onDelete: (id: number) => void;
}

export default function FolderCard(props: FolderCardProps) {
  const isEditing = useSignal(false);

  return (
    <>
      {isEditing.value
        ? (
          <EditGroupCard
            group={props.group}
            groups={props.groups}
            editing={isEditing}
            managerState={props.managerState}
          />
        )
        : (
          <ViewGroupCard
            group={props.group}
            managerState={props.managerState}
            editing={isEditing}
            onDelete={props.onDelete}
          />
        )}
    </>
  );
}

interface EditGroupCardProps {
  group: GroupWithBibliographies;
  groups: Signal<GroupWithBibliographies[]>;
  editing: Signal<boolean>;
  managerState: Signal<GroupManagementStates>;
}

function EditGroupCard(props: EditGroupCardProps) {
  const bibliomasSessionContext = useBibliomasSessionContext();
  const isLoading = useSignal(false);

  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    UpdateGroupSchema,
    {
      pk_id_grup: props.group.pk_id_grup,
      txt_nom_grup: props.group.txt_nom_grup,
      fk_id_est: bibliomasSessionContext.userId,
    },
    async (formData) => {
      isLoading.value = true;
      const response = await fetch(`/api/group/${props.group.pk_id_grup}`, {
        method: "PUT",
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

      props.groups.value = props.groups.value.map((group) =>
        group.pk_id_grup === data.pk_id_grup ? data : group
      );

      isLoading.value = false;
      props.editing.value = false;
      props.managerState.value = GroupManagementStates.IDLE;
    },
  );

  const handleCancel = () => {
    props.editing.value = false;
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
            label="Nombre de Carpeta:"
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
            Editar Grupo
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

interface ViewGroupCardProps {
  group: GroupWithBibliographies;
  managerState: Signal<GroupManagementStates>;
  editing: Signal<boolean>;
  onDelete: (id: number) => void;
}

function ViewGroupCard(props: ViewGroupCardProps) {
  const handleEdit = () => {
    props.managerState.value = GroupManagementStates.EDITING;
    props.editing.value = true;
  };

  const handleDelete = () => {
    props.onDelete(props.group.pk_id_grup);
  };
  return (
    <div class="card bg-neutral text-neutral-content">
      <div class="grid grid-cols-2 justify-center items-center p-4 gap-2">
        <a
          href={`/gestionar-grupos/${props.group.pk_id_grup}`}
          class="flex flex-col items-center"
        >
          <IconUsersGroup size={96} />
          <span class="text-lg break-all font-sans font-semibold text-center">
            {props.group.txt_nom_grup}
          </span>
        </a>
        <div class="flex flex-col gap-1">
          <span class="font-sans text-xl">
            Referencias creadas:
            {props.group.Bibliografias.length}
          </span>
        </div>
        <div class="tooltip font-mono" data-tip="Editar grupo">
          <Button
            state="btn-secondary"
            classList="w-full btn-sm"
            type="button"
            onClick={handleEdit}
            disabled={props.managerState.value !==
              GroupManagementStates.IDLE}
          >
            <IconEdit size={16} />
            Editar
          </Button>
        </div>
        <div class="tooltip font-mono" data-tip="Eliminar grupo">
          <Button
            state="btn-secondary"
            classList="w-full btn-sm"
            type="button"
            onClick={handleDelete}
            disabled={props.managerState.value !==
              GroupManagementStates.IDLE}
          >
            <IconTrash size={16} />
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}
