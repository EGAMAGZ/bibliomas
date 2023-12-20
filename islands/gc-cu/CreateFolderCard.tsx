import { EditableFolderCard } from "@/components/FolderCard.tsx";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { CreateFolderSchema } from "@/schema/folder.ts";
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
  folders: Signal<Carpetas[]>;
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
      fk_id_grup: bibliomasSessionContext.folderId,
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

      const { data } = (await response.json()) as ApiResponse<Carpetas>;
      props.folders.value = [...props.folders.value, data];
      isLoading.value = false;
      props.managerState.value = FolderManagementStates.IDLE;
    },
  );

  return (
    <EditableFolderCard>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
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
          classList="btn-sm w-full"
          disabled={isLoading.value}
          loading={isLoading.value}
        >
          Crear Carpeta
        </Button>
      </Form>
    </EditableFolderCard>
  );
}
