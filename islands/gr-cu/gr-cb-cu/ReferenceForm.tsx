import { useSignal } from "@preact/signals";
import Select from "@/islands/Select.tsx";
import { Input, InputCheckbox, InputFile } from "../../Input.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  CreateBookBibliographieSchema,
  CreateMoreBibliographieSchema,
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
      txt_tip_biblio: TYPE_PUBLICATION.SitioWeb,
      txt_fmt_biblio: TYPE_FORMATS.Apa,
      txt_tit_biblio: "",
      txt_aut_biblio: "",
      txt_pag_biblio: "",
      txt_url_biblio: "",
      txt_fecha_pub_biblio: getActualYear(),
      txt_fecha_acc_biblio: undefined,
    },
    async (data) => {
      onSubmit();
    },
  );

  return (
    <div>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
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
            disabled={!IS_BROWSER || disabled}
            required
          >
            <option value="" disabled>Seleccione un formato</option>
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
            disabled={!IS_BROWSER || disabled}
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
            disabled={!IS_BROWSER || disabled}
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
            disabled={!IS_BROWSER || disabled}
            name="txt_pag_biblio"
            required
          />
        </FormControl>

        <FormControl
          label="URL"
          error={errors.value.txt_url_biblio}
          required
        >
          <input
            type="text"
            className="input input-primary"
            disabled={!IS_BROWSER || disabled}
            name="txt_url_biblio"
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
            disabled={!IS_BROWSER || disabled}
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
            disabled={!IS_BROWSER || disabled}
            required
          />
        </FormControl>

        <DialogAction
          disabled={!IS_BROWSER || disabled}
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

export function BookForm({ disabled, onCancel }: BookFormProps) {
  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    CreateBookBibliographieSchema,
    {
      txt_tip_biblio: TYPE_PUBLICATION.Libro,
      txt_fmt_biblio: TYPE_FORMATS.Apa,
      txt_tit_biblio: "",
      txt_aut_biblio: "",
      txt_fecha_pub_biblio: getActualYear(),
      txt_edit_biblio: "",
      num_volm_biblio: undefined,
      num_edic_biblio: undefined,
      num_npag_biblio: undefined,
      txt_url_biblio: "",
    },
    async (data) => {
    },
  );

  const file = useSignal<File | null>(null);
  const fileErrors = useSignal("");

  // TODO: Agregar validacion y logica

  return (
    <div>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="txt_tip_biblio"
          value={TYPE_PUBLICATION.Libro}
        />

        <FormControl
          label="Formato"
          error={errors.value.txt_fmt_biblio}
          required
        >
          <select
            className="select select-primary select-bordered"
            name="txt_fmt_biblio"
            disabled={!IS_BROWSER || disabled}
            required
          >
            <option value="" disabled>Seleccione un formato</option>
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
            disabled={!IS_BROWSER || disabled}
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
            disabled={!IS_BROWSER || disabled}
            name="txt_aut_biblio"
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de publicación"
          error={errors.value.txt_fecha_pub_biblio}
          required
        >
          <input
            type="number"
            className="input input-primary"
            name="txt_fecha_pub_biblio"
            disabled={!IS_BROWSER || disabled}
            required
          />
        </FormControl>

        <FormControl label="Ubicación" error={errors.value.txt_ubic_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_ubic_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <FormControl label="Editorial" error={errors.value.txt_edit_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_edit_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <FormControl label="Volumen" error={errors.value.num_volm_biblio}>
          <input
            type="number"
            className="input input-primary"
            name="num_volm_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <FormControl label="Edición" error={errors.value.num_edic_biblio}>
          <input
            type="number"
            className="input input-primary"
            name="num_edic_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <FormControl
          label="Número de página"
          error={errors.value.num_npag_biblio}
        >
          <input
            type="number"
            className="input input-primary"
            name="num_npag_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>
        <FormControl label="URL" error={errors.value.txt_url_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_url_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>
        <DialogAction
          disabled={!IS_BROWSER || disabled}
          onCancel={onCancel}
        />
        <InputFile
          label="Archivo"
          value={file}
          error={fileErrors}
          name="file"
          disabled={disabled}
          accept=".pdf"
        />
      </Form>
    </div>
  );
}

interface MoreFormProps {
  disabled: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

export function MoreForm({ disabled, onCancel }: MoreFormProps) {
  const { form, errors, handleChange, handleSubmit } = useFormicaForm(
    CreateMoreBibliographieSchema,
    {
      txt_aut_biblio: "",
      txt_tit_biblio: "",
      txt_tip_biblio: "ArticuloRevista",
      txt_fmt_biblio: "Apa",
      bool_online_biblio: false,
      txt_edit_biblio: undefined,
      txt_fecha_pub_biblio: undefined,
      txt_url_biblio: undefined,
    },
    async () => {
    },
  );

  // TODO: Agregar validacion y logica

  return (
    <div>
      <Form value={form.value} onChange={handleChange} onSubmit={handleSubmit}>
        <FormControl
          label="Formato"
          error={errors.value.txt_fmt_biblio}
          required
        >
          <select
            className="select select-primary select-bordered"
            name="txt_fmt_biblio"
            disabled={!IS_BROWSER || disabled}
            required
          >
            <option value="" disabled>Seleccione un formato</option>
            {Object.entries(TYPE_FORMATS).map(([key, value]) => (
              <option value={key} className="uppercase">{value}</option>
            ))}
          </select>
        </FormControl>
        <FormControl
          label="Tipo de publicación"
          error={errors.value.txt_tip_biblio}
          required
        >
          <select
            className="select select-primary select-bordered"
            name="txt_tip_biblio"
            disabled={!IS_BROWSER || disabled}
            required
          >
            <option value="" disabled>Seleccione un tipo de publicación</option>
            // TODO: Remover sitioweb y libro

            {
              /* {Object.entries(TYPE_PUBLICATION).map(([key, value]) => (
              <option value={key} className="uppercase">{value}</option>
            ))} */
            }
          </select>
        </FormControl>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text font-sans">Recurso online</span>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              name="bool_online_biblio"
              disabled={!IS_BROWSER || disabled}
            />
          </label>
        </div>

        <FormControl
          label="Titulo"
          error={errors.value.txt_tit_biblio}
          required
        >
          <input
            type="text"
            className="input input-primary"
            name="txt_tit_biblio"
            disabled={!IS_BROWSER || disabled}
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
            name="txt_aut_biblio"
            disabled={!IS_BROWSER || disabled}
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de publicacion"
          error={errors.value.txt_fecha_pub_biblio}
        >
          <input
            type="date"
            className="input input-primary"
            name="txt_fecha_pub_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <FormControl label="Editorial" error={errors.value.txt_edit_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_edit_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <FormControl
          label="URL"
          error={errors.value.txt_url_biblio}
        >
          <input
            type="text"
            className="input input-primary"
            name="txt_url_biblio"
            disabled={!IS_BROWSER || disabled}
          />
        </FormControl>

        <DialogAction
          disabled={!IS_BROWSER || disabled}
          onCancel={onCancel}
        />
      </Form>
    </div>
  );
}
