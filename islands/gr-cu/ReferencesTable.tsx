import CreateReferenceButton from "@/islands/gr-cu/gr-cb-cu/CreateReferenceButton.tsx";
import { IconButton } from "@/components/Button.tsx";
import { IconCopy, IconEdit, IconTrash } from "@tabler-icons";
import { useSignal, useSignalEffect } from "@preact/signals";
import { Bibliografias } from "@/generated/client/deno/edge.ts";

export default function ReferencesTable() {
  const bibliographies = useSignal<Bibliografias[]>([]);

  useSignalEffect(() => {
    console.log("hola");
  });

  return (
    <>
      <div class="flex flex-col gap-4 w-full">
        <div className="">
          <table className="table">
            <thead>
              <tr className="font-mono">
                <th>Seleccionar</th>
                <th>Autor</th>
                <th>Año</th>
                <th>Titulo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <ReferencesTableRow
                onSelect={() => {}}
                onEdit={() => {}}
                onDelete={() => {}}
                onCopy={() => {
                  console.log("copiar");
                }}
              />
            </tbody>
          </table>
        </div>

        <CreateReferenceButton />
      </div>
    </>
  );
}

interface ReferencesTableRowProps {
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCopy: () => void;
}

function ReferencesTableRow(props: ReferencesTableRowProps) {
  return (
    <tr className="font-sans">
      <th>
        <input type="checkbox" className="checkbox" onChange={props.onSelect} />
      </th>
      <td>Trotter Luca</td>
      <td>2000</td>
      <td>El piano no es bueno en la contruccion.....</td>
      <td>
        <div className="flex gap-2">
          <IconButton tooltip="Editar">
            <IconEdit size={20} />
          </IconButton>
          <IconButton tooltip="Eliminar">
            <IconTrash size={20} />
          </IconButton>
          <IconButton tooltip="Copiar referencia" onClick={props.onCopy}>
            <IconCopy size={20} />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}
