import CreateReferenceButton from "@/islands/gr-cu/gr-cb-cu/CreateReferenceButton.tsx";
import { IconButton } from "@/components/Button.tsx";
import { IconCopy, IconEdit, IconTrash } from "@tabler-icons";
import { useSignal, useSignalEffect } from "@preact/signals";
import { Bibliografias } from "@/generated/client/deno/edge.ts";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { Pagination } from "@/schema/pagination.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import PaginationButtons from "../PaginationButtons.tsx";
import DeleteReferenceDialog from "@/islands/gr-cu/DeleteReferenceDialog.tsx";
import { DEFAULT_PAGINATION_LIMIT } from "@/utils/constants.ts";
import DownloadFileButton from "@/islands/gr-cu/DownloadFileButton.tsx";
import UpdateReferenceDialog from "@/islands/gr-cu/gr-cb-cu/UpdateReferenceDialog.tsx";
import GenerateReferenceButton from "@/islands/gr-cu/GenerateReferenceButton.tsx";
import {
  TYPE_FORMATS_OPTIONS,
  TYPE_PUBLICATION_OPTIONS,
} from "@/schema/bibliographie.ts";

export default function ReferencesManagement() {
  const bibliomasContext = useBibliomasSessionContext();

  const isLoading = useSignal(true);
  const actualPage = useSignal(1);
  const pagination = useSignal<Pagination<Bibliografias> | null>(null);
  const deletableBibliographie = useSignal<number | null>(null);
  const editableBibliographie = useSignal<Bibliografias | null>(null);

  const fetchBibliographies = async () => {
    isLoading.value = true;

    const searchParams = new URLSearchParams();
    searchParams.append("limit", String(DEFAULT_PAGINATION_LIMIT));
    searchParams.append("page", actualPage.value.toString());
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

    isLoading.value = false;
  };

  // Carga bibliografías al cargar la página
  useSignalEffect(() => {
    fetchBibliographies();
  });

  return (
    <>
      <div class="flex flex-col gap-4 w-full">
        {/* FIXME: ARREGLAR OVERFLOW O BARRA DE NAVEGACION PARA RESPONSIVIDAD */}
        <div class="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr className="font-mono">
                <th>Seleccionar</th>
                <th>Autor</th>
                <th>Año</th>
                <th>Titulo</th>
                <th>Tipo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pagination.value?.content.map((bibliography, index) => (
                <ReferencesTableRow
                  numberBibliography={(index + 1) +
                    ((actualPage.value - 1) * DEFAULT_PAGINATION_LIMIT)}
                  key={bibliography.pk_id_biblio}
                  bibliography={bibliography}
                  onEdit={() => {
                    editableBibliographie.value = bibliography;
                  }}
                  onDelete={() => {
                    deletableBibliographie.value = bibliography.pk_id_biblio;
                  }}
                  disabled={isLoading.value}
                />
              ))}
            </tbody>
          </table>

          <DeleteReferenceDialog
            bibliographyId={deletableBibliographie}
            onAccept={fetchBibliographies}
          />
          {editableBibliographie.value && (
            <UpdateReferenceDialog
              bibliography={editableBibliographie}
              onSubmit={fetchBibliographies}
            />
          )}
        </div>
        <div class="self-center lg:self-end">
          <PaginationButtons
            actualPage={actualPage}
            totalPages={pagination.value?.pagination.totalPages ?? 1}
            disabled={isLoading.value}
          />
        </div>
        <CreateReferenceButton
          onSubmit={fetchBibliographies}
          classList="lg:w-fit lg:self-center"
          disabled={isLoading.value}
        />
      </div>
    </>
  );
}

interface ReferencesTableRowProps {
  bibliography: Bibliografias;
  numberBibliography: number;
  onEdit: () => void;
  onDelete: () => void;
  disabled: boolean;
}

function ReferencesTableRow(props: ReferencesTableRowProps) {
  return (
    <tr className="font-sans hover">
      <th>
        {props.numberBibliography}
      </th>
      <td>{props.bibliography.txt_aut_biblio}</td>
      <td>{props.bibliography.txt_fecha_pub_biblio}</td>
      <td>{props.bibliography.txt_tit_biblio}</td>
      <td>
        <div>
          <div class="badge badge-primary font-mono">
            {TYPE_FORMATS_OPTIONS[props.bibliography.txt_fmt_biblio].name}
          </div>
          <div class="text-sm opacity-50 ">
            {TYPE_PUBLICATION_OPTIONS[props.bibliography.txt_tip_biblio].name}
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <IconButton
            tooltip="Editar"
            disabled={props.disabled}
            onClick={props.onEdit}
          >
            <IconEdit size={20} />
          </IconButton>
          <IconButton
            tooltip="Eliminar"
            disabled={props.disabled}
            onClick={props.onDelete}
          >
            <IconTrash size={20} />
          </IconButton>

          <GenerateReferenceButton
            bibliography={props.bibliography}
            disabled={props.disabled}
          />

          <DownloadFileButton
            bibliographyId={props.bibliography.pk_id_biblio}
            title={props.bibliography.txt_tit_biblio}
            disabled={props.disabled}
          />
        </div>
      </td>
    </tr>
  );
}
