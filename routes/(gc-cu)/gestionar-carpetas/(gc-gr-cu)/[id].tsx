import { PageProps } from "$fresh/server.ts";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";
import ReferencesManagement from "@/islands/gr-cu/ReferencesManagement.tsx";

export default function GestionarReferenciaCarpetaPage(
  props: PageProps<Data, SessionState>,
) {
  return (
    <div class="flex justify-center">
      <div class="container p-4 2xl:p-0 flex flex-col items-center">
        <span class="text-4xl lg:text-6xl font-sans font-bold mt-8 mb-16">
          Gestionar referencias por carpeta
        </span>
        <BibliomasSessionProvider
          value={{
            userId: props.state._id,
            folderId: Number(props.params.id),
          }}
        >
          <ReferencesManagement />
        </BibliomasSessionProvider>
        <div class="flex w-full flex-col lg:flex-row justify-center gap-4 mt-4">
          <a
            href="/gestionar-carpetas"
            class="btn btn-secondary font-sans lg:w-fit"
          >
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
}
