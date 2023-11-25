import { useSignal } from "@preact/signals";
import Select from "@/islands/Select.tsx";
import { Input, InputFile } from "@/islands/Input.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface WebSiteFormProps {
  disabled: boolean;
}

export function WebSiteForm({ disabled }: WebSiteFormProps) {
  const format = useSignal("");
  const formatErrors = useSignal("");

  const title = useSignal("");
  const titleErrors = useSignal("");

  const autors = useSignal("");
  const autorsErrors = useSignal("");

  const siteName = useSignal("");
  const siteNameErrors = useSignal("");

  const url = useSignal("");
  const urlErrors = useSignal("");

  const publicationDate = useSignal("");
  const publicationDateErrors = useSignal("");

  const accessDate = useSignal("");
  const accessDateErrors = useSignal("");

  // TODO: Agregar validacion y logica

  return (
    <div>
      <Select
        defaultValue="Formato"
        label="Formato"
        value={format}
        error={formatErrors}
        name="format"
        disabled={!IS_BROWSER || disabled}
        required
      >
        <option>Hello</option>
      </Select>

      <Input
        label="Título"
        value={title}
        error={titleErrors}
        name="title"
        type="text"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Autores"
        value={autors}
        error={autorsErrors}
        name="autors"
        type="text"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Nombre de la pagina"
        value={siteName}
        error={siteNameErrors}
        name="siteName"
        type="text"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="URL"
        value={url}
        error={urlErrors}
        name="url"
        type="text"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Fecha de publicación"
        value={publicationDate}
        error={publicationDateErrors}
        name="publicationDate"
        type="date"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Fecha de acceso"
        value={accessDate}
        error={accessDateErrors}
        name="accessDate"
        type="date"
        disabled={!IS_BROWSER || disabled}
      />
    </div>
  );
}

interface BookFormProps {
  disabled: boolean;
}

export function BookForm({ disabled }: BookFormProps) {
  const format = useSignal("");
  const formatErrors = useSignal("");

  const title = useSignal("");
  const titleErrors = useSignal("");

  const autors = useSignal("");
  const autorsErrors = useSignal("");

  const publicationDate = useSignal("");
  const publicationDateErrors = useSignal("");

  const location = useSignal("");
  const locationErrors = useSignal("");

  const publisher = useSignal("");
  const publisherErrors = useSignal("");

  const volume = useSignal("");
  const volumeErrors = useSignal("");

  const edition = useSignal("");
  const editionErrors = useSignal("");

  const numPages = useSignal("");
  const numPagesErrors = useSignal("");

  const url = useSignal("");
  const urlErrors = useSignal("");

  const file = useSignal<File | null>(null);
  const fileErrors = useSignal("");

  // TODO: Agregar validacion y logica

  return (
    <div>
      <Select
        defaultValue="Formato"
        label="Formato"
        value={format}
        error={formatErrors}
        name="format"
        disabled={!IS_BROWSER || disabled}
        required
      >
        <option>Hello</option>
      </Select>

      <Input
        label="Título"
        value={title}
        error={titleErrors}
        name="title"
        type="text"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Autores"
        value={autors}
        error={autorsErrors}
        name="autors"
        type="text"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Fecha de publicación"
        value={publicationDate}
        error={publicationDateErrors}
        name="publicationDate"
        type="date"
        disabled={!IS_BROWSER || disabled}
        required
      />

      <Input
        label="Ubicación"
        value={location}
        error={locationErrors}
        name="location"
        type="text"
        disabled={!IS_BROWSER || disabled}
      />

      <Input
        label="Editorial"
        value={publisher}
        error={publisherErrors}
        name="publisher"
        type="text"
        disabled={!IS_BROWSER || disabled}
      />

      <Input
        label="Volumen"
        value={volume}
        error={volumeErrors}
        name="volume"
        type="number"
        disabled={!IS_BROWSER || disabled}
      />

      <Input
        label="Edición"
        value={edition}
        error={editionErrors}
        name="edition"
        type="number"
        disabled={!IS_BROWSER || disabled}
      />

      <Input
        label="Número de páginas"
        value={numPages}
        error={numPagesErrors}
        name="numPages"
        type="number"
        disabled={!IS_BROWSER || disabled}
      />

      <Input
        label="URL"
        value={url}
        error={urlErrors}
        name="url"
        type="text"
        disabled={!IS_BROWSER || disabled}
      />

      <InputFile
        label="Archivo"
        value={file}
        error={fileErrors}
        name="file"
        disabled={!IS_BROWSER || disabled}
      />
    </div>
  );
}

export function MoreForm() {
  return (
    <div>
      <span>Más</span>
    </div>
  );
}
