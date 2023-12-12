import { PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import CreateReferenceButton from "@/islands/gr-cu/gr-cb-cu/CreateReferenceButton.tsx";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";
import BibliographiesTable from "@/islands/gr-cu/ReferencesTable.tsx";

export default function GestionarReferenciasPage(
  props: PageProps<Data, SessionState>,
) {
  return (
    <div className="flex justify-center">
      <div className="container p-4 lg:p-0 flex flex-col items-center">
        <span className="text-4xl lg:text-6xl font-sans font-bold mt-8 mb-16">
          Gestionar Referencias
        </span>
        <BibliomasSessionProvider
          value={{
            userId: props.state._id,
          }}
        >
          <BibliographiesTable />
        </BibliomasSessionProvider>
      </div>
    </div>
  );
}
