import CreateReferenceButton from "@/islands/gr-cu/gr-cb-cu/CreateReferenceButton.tsx";
import { IconButton } from "@/components/Button.tsx";
import { IconCopy, IconEdit, IconTrash } from "@tabler-icons";
import { useSignal, useSignalEffect } from "@preact/signals";
import { Bibliografias } from "@/generated/client/deno/edge.ts";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { Pagination } from "@/schema/pagination.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import PaginationButtons from "@/components/PaginationButtons.tsx";

export default function ReferencesManagement() {
  const bibliomasContext = useBibliomasSessionContext();

  const isLoading = useSignal(true);
  const page = useSignal(1);
  const pagination = useSignal<Pagination<Bibliografias> | null>(null);
  const fetchData = async () => {
    const searchParams = new URLSearchParams();
    searchParams.append("limit", "10");
    searchParams.append("page", page.value.toString());
    searchParams.append("userId", bibliomasContext.userId);

    const response = await fetch(
      `/api/bibliographie?${searchParams.toString()}`,
    );
    const { data } = (await response.json()) as ApiResponse<
      Pagination<Bibliografias>
    >;
    if (response.status === 200) {
      pagination.value = data;
    }
  };

  useSignalEffect(() => {
    isLoading.value = true;
    fetchData();
    isLoading.value = false;
  });

  return (
    <>
      <div class="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <table className="table table-zebra">
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
              {pagination.value?.content.map((bibliography) => (
                <ReferencesTableRow
                  bibliography={bibliography}
                  onSelect={() => {}}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  onCopy={() => {
                    console.log("copiar");
                  }}
                  disabled={isLoading.value}
                />
              ))}
            </tbody>
          </table>
          <div class="self-end">
            <PaginationButtons
              page={page.value}
              totalPages={pagination.value?.pagination.totalPages ?? 1}
              disabled={isLoading.value}
              onFirstPage={() => {
                page.value = 1;
              }}
              onPreviousPage={() => {
                page.value = page.value - 1;
              }}
              onNextPage={() => {
                page.value = page.value + 1;
              }}
              onLastPage={() => {
                page.value = pagination.value?.pagination.totalPages ?? 1;
              }}
            />
          </div>
        </div>

        <CreateReferenceButton
          onSubmit={() => {
            fetchData();
          }}
        />
      </div>
    </>
  );
}

interface ReferencesTableRowProps {
  bibliography: Bibliografias;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCopy: () => void;
  disabled: boolean;
}

function ReferencesTableRow(props: ReferencesTableRowProps) {
  return (
    <tr className="font-sans hover">
      <th>
        <input type="checkbox" className="checkbox" onChange={props.onSelect} />
      </th>
      <td>{props.bibliography.txt_aut_biblio}</td>
      <td>{props.bibliography.txt_fecha_pub_biblio}</td>
      <td>{props.bibliography.txt_tit_biblio}</td>
      <td>
        <div className="flex gap-2">
          <IconButton tooltip="Editar" disabled={props.disabled}>
            <IconEdit size={20} />
          </IconButton>
          <IconButton tooltip="Eliminar" disabled={props.disabled}>
            <IconTrash size={20} />
          </IconButton>
          <IconButton
            tooltip="Copiar referencia"
            onClick={props.onCopy}
            disabled={props.disabled}
          >
            <IconCopy size={20} />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}
