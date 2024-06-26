import { EditableFolderCard } from "../../components/EditableFolderCard.tsx";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import {
  CreateFolderSchema,
  FolderWithBibliographies,
} from "@/schema/folder.ts";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { Form } from "formika";
import FormControl from "@/components/FormControl.tsx";
import { useEffect } from "preact/hooks";
import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import Button from "@/components/Button.tsx";
import { Carpetas } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { FolderManagementStates } from "@/schema/states.ts";

interface CreateFolderCardProps {
  folders: Signal<FolderWithBibliographies[]>;
  managerState: Signal<FolderManagementStates>;
}

export default function CreateFolderCard(props: CreateFolderCardProps) {
  const bibliomasSessionContext = useBibliomasSessionContext();
  const isLoading = useSignal(false);

  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    CreateFolderSchema,
    {
      txt_nom_carp: "",
      fk_id_est: bibliomasSessionContext.userId,
      fk_id_grup: bibliomasSessionContext.groupId,
    },
    async (formData) => {
      isLoading.value = true;
      const response = await fetch("/api/folder", {
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
        FolderWithBibliographies
      >;
      props.folders.value = [...props.folders.value, data];
      isLoading.value = false;
      props.managerState.value = FolderManagementStates.IDLE;
    },
  );

  const handleCancel = () => {
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
            Crear Carpeta
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
