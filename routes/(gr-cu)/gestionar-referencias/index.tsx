import { PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import CreateReferenceButton from "@/islands/gr-cu/gr-cb-cu/CreateReferenceButton.tsx";

export default function GestionarReferenciasPage(
  props: PageProps<Data, SessionState>,
) {
  return (
    <div class="flex justify-center">
      <div class="container p-4 mt-16 lg:p-0 flex flex-col items-center">
        <span class="text-4xl lg:text-6xl font-sans font-bold">
          Gestionar Referencias
        </span>
        <CreateReferenceButton disabled={false} />
      </div>
    </div>
  );
}
