import { IconEdit, IconFolder, IconTrash } from "@tabler-icons";
import { FolderWithBibliographies } from "@/schema/folder.ts";

interface FolderCardProps {
  folder: FolderWithBibliographies;
  onDelete: (id: number) => void;
}

export default function FolderCard(props: FolderCardProps) {
  return (
    <div class="card bg-neutral text-neutral-content">
      <div class="grid grid-cols-2 justify-center items-center p-4 gap-2">
        <a
          href={`/gestionar-carpetas/${props.folder.pk_id_carp}`}
          class="flex flex-col items-center"
        >
          <IconFolder size={96} />
          <span class="text-lg break-all font-sans font-semibold">
            {props.folder.txt_nom_carp}
          </span>
        </a>
        <div class="flex flex-col gap-1">
          <span class="font-sans text-xl">
            Referencias creadas:
            {props.folder.Bibliografias.length}
          </span>
          <div class="tooltip font-mono" data-tip="Editar carpeta">
            <button class="btn w-full btn-sm btn-secondary font-sans">
              <IconEdit size={16} />
              Editar
            </button>
          </div>
          <div class="tooltip font-mono" data-tip="Crear carpeta">
            <button
              class="btn w-full btn-sm btn-secondary font-sans"
              onClick={() => props.onDelete(props.folder.pk_id_carp)}
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
