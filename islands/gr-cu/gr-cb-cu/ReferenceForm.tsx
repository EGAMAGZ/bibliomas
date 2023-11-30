import { useSignal } from "@preact/signals";
import Select from "@/islands/Select.tsx";
import { Input, InputCheckbox, InputFile } from "@/islands/Input.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { CreateWebSiteBibliographieSchema } from "@/schema/bibliographie.ts";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { Form } from "formika";
import { FormControl } from "formika";
import { FormControlState } from "@/schema/formica.ts";
import DialogAction from "@/components/gr-cu/gr-cb-cu/DialogAction.tsx";

interface WebSiteFormProps {
  disabled: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

export function WebSiteForm(
  { disabled, onCancel, onSubmit }: WebSiteFormProps,
) {
  const { form, handleChange, handleSubmit } = useFormicaForm(
    CreateWebSiteBibliographieSchema,
    {
      txt_tip_biblio: "SitioWeb",
      txt_fmt_biblio: "Apa",
      txt_tit_biblio: "",
      txt_aut_biblio: "",
      txt_dir_biblio: "",
      txt_fecha_pub_biblio: 0,
      txt_pag_biblio: "",
      txt_fecha_acc_biblio: undefined,
    },
    (data) => {
      console.log(data);
      onSubmit();
    },
  );

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
      <Form value={form.value} onChange={handleChange} onSubmit={handleSubmit}>
        <FormControl name="txt_tit_biblio">
          {({ touched, validity }: FormControlState) => (
            <div className="font-sans form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Titulo
                </span>
              </label>
              <input type="text" className="input input-primary" />
            </div>
          )}
        </FormControl>

        <DialogAction disabled={disabled} onCancel={onCancel} />
      </Form>
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
        label="Nombre de la pagina"
        value={siteName}
        error={siteNameErrors}
        name="siteName"
        type="text"
        disabled={disabled}
        required
      />

      <Input
        label="URL"
        value={url}
        error={urlErrors}
        name="url"
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
        label="Fecha de acceso"
        value={accessDate}
        error={accessDateErrors}
        name="accessDate"
        type="date"
        disabled={disabled}
      />
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
