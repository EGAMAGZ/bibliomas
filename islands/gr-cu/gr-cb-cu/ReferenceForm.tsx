import { useSignal } from "@preact/signals";
import Select from "@/islands/Select.tsx";
import { Input, InputCheckbox, InputFile } from "../../Input.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  CreateWebSiteBibliographieSchema,
  TYPE_FORMATS,
  TYPE_PUBLICATION,
} from "@/schema/bibliographie.ts";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { Form } from "formika";
import DialogAction from "@/components/gr-cu/gr-cb-cu/DialogAction.tsx";
import { z } from "zod";
import FormControl from "@/components/FormControl.tsx";
import { getActualYear } from "@/utils/date.ts";
import { useRef } from "preact/hooks";

interface WebSiteFormProps {
  disabled: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

export function WebSiteForm(
  { disabled, onCancel, onSubmit }: WebSiteFormProps,
) {
  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    CreateWebSiteBibliographieSchema,
    {
      txt_tip_biblio: "SitioWeb",
      txt_fmt_biblio: "Apa",
      txt_tit_biblio: "",
      txt_aut_biblio: "",
      txt_pag_biblio: "",
      txt_dir_biblio: "",
      txt_fecha_pub_biblio: getActualYear(),
      txt_fecha_acc_biblio: undefined,
    },
    (data) => {
      onSubmit();
    },
  );
  const refForm = useRef<HTMLFormElement>(null);

  return (
    <div>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        class="validated"
      >
        <input
          type="hidden"
          name="txt_tip_biblio"
          value={TYPE_PUBLICATION.SitioWeb}
        />

        <FormControl
          label="Formato"
          error={errors.value.txt_fmt_biblio}
          required
        >
          <select
            className="select select-primary select-bordered"
            name="txt_fmt_biblio"
            required
          >
            <option value="">Seleccione un formato</option>
            {Object.entries(TYPE_FORMATS).map(([key, value]) => (
              <option value={key} className="uppercase">{value}</option>
            ))}
          </select>
        </FormControl>

        <FormControl
          label="Titulo"
          error={errors.value.txt_tit_biblio}
          required
        >
          <input
            type="text"
            className="input input-primary"
            disabled={disabled}
            name="txt_tit_biblio"
            required
          />
        </FormControl>

        <FormControl
          label="Autores"
          error={errors.value.txt_aut_biblio}
          required
        >
          <input
            type="text"
            className="input input-primary"
            disabled={disabled}
            name="txt_aut_biblio"
            required
          />
        </FormControl>

        <FormControl
          label="Nombre de la pagina"
          error={errors.value.txt_pag_biblio}
          required
        >
          <input
            type="text"
            className="input input-primary"
            disabled={disabled}
            name="txt_pag_biblio"
            required
          />
        </FormControl>

        <FormControl
          label="URL"
          error={errors.value.txt_dir_biblio}
          required
        >
          <input
            type="text"
            className="input input-primary"
            disabled={disabled}
            name="txt_dir_biblio"
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de publicación"
          error={errors.value.txt_fecha_pub_biblio}
          required
        >
          <input
            type="number"
            className="input input-primary"
            name="txt_fecha_pub_biblio"
            disabled={disabled}
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de acceso"
          error={errors.value.txt_fecha_acc_biblio}
          required
        >
          <input
            type="date"
            className="input input-primary"
            name="txt_fecha_acc_biblio"
            disabled={disabled}
            required
          />
        </FormControl>

        <DialogAction
          disabled={disabled}
          onCancel={onCancel}
        />
      </Form>
    </div>
  );
}

interface BookFormProps {
  disabled: boolean;
  onCancel: () => void;
  onSubmit: () => void;
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
        disabled={disabled}
        required
      >
        {/* TODO: AGREGAR FORMATOS */}
        <option>Hello</option>
      </Select>

      <Input
        label="Título"
        value={title}
        error={titleErrors}
        name="title"
        type="text"
        disabled={disabled}
        required
      />

      <Input
        label="Autores"
        value={autors}
        error={autorsErrors}
        name="autors"
        type="text"
        disabled={disabled}
        required
      />

      <Input
        label="Fecha de publicación"
        value={publicationDate}
        error={publicationDateErrors}
        name="publicationDate"
        type="date"
        disabled={disabled}
        required
      />

      <Input
        label="Ubicación"
        value={location}
        error={locationErrors}
        name="location"
        type="text"
        disabled={disabled}
      />

      <Input
        label="Editorial"
        value={publisher}
        error={publisherErrors}
        name="publisher"
        type="text"
        disabled={disabled}
      />

      <Input
        label="Volumen"
        value={volume}
        error={volumeErrors}
        name="volume"
        type="number"
        disabled={disabled}
      />

      <Input
        label="Edición"
        value={edition}
        error={editionErrors}
        name="edition"
        type="number"
        disabled={disabled}
      />

      <Input
        label="Número de páginas"
        value={numPages}
        error={numPagesErrors}
        name="numPages"
        type="number"
        disabled={disabled}
      />

      <Input
        label="URL"
        value={url}
        error={urlErrors}
        name="url"
        type="text"
        disabled={disabled}
      />

      <InputFile
        label="Archivo"
        value={file}
        error={fileErrors}
        name="file"
        disabled={disabled}
        accept=".pdf"
      />
    </div>
  );
}

interface MoreFormProps {
  disabled: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

export function MoreForm({ disabled }: MoreFormProps) {
  const format = useSignal("");
  const formatErrors = useSignal("");

  const typePublication = useSignal("");
  const typePublicationErrors = useSignal("");

  const onlineSource = useSignal(false);
  const onlineSourceErrors = useSignal("");

  const title = useSignal("");
  const titleErrors = useSignal("");

  const autors = useSignal("");
  const autorsErrors = useSignal("");

  const publicationDate = useSignal("");
  const publicationDateErrors = useSignal("");

  const publisher = useSignal("");
  const publisherErrors = useSignal("");

  const address = useSignal("");
  const addressErrors = useSignal("");

  // TODO: Agregar validacion y logica

  return (
    <div>
      <Select
        defaultValue="Formato"
        label="Formato"
        value={format}
        error={formatErrors}
        name="format"
        disabled={disabled}
        required
      >
        {/* TODO: AGREGAR FORMATOS */}
        <option>Hello</option>
      </Select>
      <Select
        defaultValue="Tipo de publicacion"
        value={typePublication}
        error={typePublicationErrors}
        label="Tipo de publicacion"
        name="typePublication"
        disabled={disabled}
        required
      >
        {/* TODO: AGREGAR tipos */}
        <option>Hello</option>
      </Select>

      <InputCheckbox
        value={onlineSource}
        error={onlineSourceErrors}
        label="Fuente online"
        name="onlineSource"
        disabled={disabled}
      />

      <Input
        label="Título"
        value={title}
        error={titleErrors}
        name="title"
        type="text"
        disabled={disabled}
        required
      />

      <Input
        label="Autores"
        value={autors}
        error={autorsErrors}
        name="autors"
        type="text"
        disabled={disabled}
        required
      />

      <Input
        label="Fecha de publicación"
        value={publicationDate}
        error={publicationDateErrors}
        name="publicationDate"
        type="date"
        disabled={disabled}
      />

      <Input
        label="Editorial"
        value={publisher}
        error={publisherErrors}
        name="publisher"
        type="text"
        disabled={disabled}
      />

      <Input
        label="Dirección"
        value={address}
        error={addressErrors}
        name="address"
        type="text"
        disabled={disabled}
      />
    </div>
  );
}
