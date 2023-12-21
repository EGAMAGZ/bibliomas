import { IconEdit, IconFolder, IconTrash } from "@tabler-icons";
import {
  CreateFolderSchema,
  FolderWithBibliographies,
  UpdateFolderSchema,
} from "@/schema/folder.ts";
import { FolderManagementStates } from "@/schema/states.ts";
import { Signal, useSignal } from "@preact/signals";
import { Form } from "formika";
import Button from "@/components/Button.tsx";
import { EditableFolderCard } from "../../components/EditableFolderCard.tsx";
import FormControl from "@/components/FormControl.tsx";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { ApiResponse } from "@/schema/api-response.ts";

interface FolderCardProps {
  folder: FolderWithBibliographies;
  folders: Signal<FolderWithBibliographies[]>;
  managerState: Signal<FolderManagementStates>;
  onDelete: (id: number) => void;
}

export default function FolderCard(props: FolderCardProps) {
  const isEditing = useSignal(false);
  return (
    <>
      {isEditing.value
        ? (
          <EditFolderCard
            folders={props.folders}
            folder={props.folder}
            editing={isEditing}
            managerState={props.managerState}
          />
        )
        : (
          <ViewFolderCard
            folder={props.folder}
            managerState={props.managerState}
            editing={isEditing}
            onDelete={props.onDelete}
          />
        )}
    </>
  );
}

interface ViewFolderCardProps {
  folder: FolderWithBibliographies;
  managerState: Signal<FolderManagementStates>;
  editing: Signal<boolean>;
  onDelete: (id: number) => void;
}

function ViewFolderCard(props: ViewFolderCardProps) {
  return (
    <div class="card bg-neutral text-neutral-content">
      <div class="grid grid-cols-2 justify-center items-center p-4 gap-2">
        <a
          href={`/gestionar-carpetas/${props.folder.pk_id_carp}`}
          class="flex flex-col items-center"
        >
          <IconFolder size={96} />
          <span class="text-lg break-all font-sans font-semibold text-center">
            {props.folder.txt_nom_carp}
          </span>
        </a>
        <div class="flex flex-col gap-1">
          <span class="font-sans text-xl">
            Referencias creadas:
            {props.folder.Bibliografias.length}
          </span>
          <div class="tooltip font-mono" data-tip="Editar carpeta">
            <button
              class="btn w-full btn-sm btn-secondary font-sans"
              onClick={() => {
                props.managerState.value = FolderManagementStates.EDITING;
                props.editing.value = true;
              }}
              disabled={props.managerState.value !==
                FolderManagementStates.IDLE}
            >
              <IconEdit size={16} />
              Editar
            </button>
          </div>
          <div class="tooltip font-mono" data-tip="Crear carpeta">
            <button
              class="btn w-full btn-sm btn-secondary font-sans"
              onClick={() => props.onDelete(props.folder.pk_id_carp)}
              disabled={props.managerState.value !==
                FolderManagementStates.IDLE}
            >
              <IconTrash size={16} />
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EditFolderCardProps {
  folders: Signal<FolderWithBibliographies[]>;
  editing: Signal<boolean>;
  folder: FolderWithBibliographies;
  managerState: Signal<FolderManagementStates>;
}

function EditFolderCard(props: EditFolderCardProps) {
  const bibliomasSessionContext = useBibliomasSessionContext();
  const isLoading = useSignal(false);

  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    UpdateFolderSchema,
    {
      pk_id_carp: props.folder.pk_id_carp,
      txt_nom_carp: props.folder.txt_nom_carp,
      fk_id_est: bibliomasSessionContext.userId,
      fk_id_grup: bibliomasSessionContext.folderId,
    },
    async (formData) => {
      isLoading.value = true;
      const response = await fetch(`/api/folder/${props.folder.pk_id_carp}`, {
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
        FolderWithBibliographies
      >;
      props.folders.value = props.folders.value.map((folder) =>
        folder.pk_id_carp === data.pk_id_carp ? data : folder
      );
      isLoading.value = false;
      props.editing.value = false;
      props.managerState.value = FolderManagementStates.IDLE;
    },
  );

  const handleCancel = () => {
    props.editing.value = false;
    props.managerState.value = FolderManagementStates.IDLE;
  };

  return (
    <EditableFolderCard>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div class="flex flex-col gap-1">
          <FormControl
            label="Nombre de Carpeta:"
            error={errors.value.txt_nom_carp}
            required
          >
            <input
              type="text"
              class="input input-primary input-sm"
              name="txt_nom_carp"
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
            Editar Carpeta
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
    </EditableFolderCard>
  );
}
