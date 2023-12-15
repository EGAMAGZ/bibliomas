import { Signal, useSignal } from "@preact/signals";
import { InputFile } from "../../Input.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  CreateBookBibliographieSchema,
  CreateMoreBibliographieSchema,
  CreateWebSiteBibliographieSchema,
  MORE_TYPE_PUBLICATION,
  TYPE_FORMATS,
  TYPE_PUBLICATION,
  TypePublication,
  UpdateBookBibliographie,
  UpdateBookBibliographieSchema,
  UpdateMoreBibliographie,
  UpdateMoreBibliographieSchema,
  UpdateWebSiteBibliographie,
  UpdateWebSiteBibliographieSchema,
} from "@/schema/bibliographie.ts";
import { useFormicaForm } from "@/hooks/use-formica-form.tsx";
import { Form } from "formika";
import DialogAction from "@/components/gr-cu/gr-cb-cu/DialogAction.tsx";
import FormControl from "@/components/FormControl.tsx";
import { getActualYear } from "@/utils/date.ts";
import { useBibliomasSessionContext } from "@/context/session-context.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Archivos, Bibliografias } from "@/generated/client/deno/edge.ts";
import { Bucket, supabase } from "@/database/supabase.ts";
import { BibliographieFile } from "@/schema/files.ts";

interface FormProps {
  loading: Signal<boolean>;
  bibliography: Signal<Bibliografias | null>;
  onCancel: () => void;
  onSubmit: () => void;
}

export function WebSiteForm(
  props: FormProps,
) {
  const bibliomasSessionContext = useBibliomasSessionContext();

  const DEFAULT_FORM = {
    pk_id_biblio: 0,
    txt_tip_biblio: TYPE_PUBLICATION.SitioWeb,
    txt_fmt_biblio: TYPE_FORMATS.Apa,
    txt_tit_biblio: "",
    txt_aut_biblio: "",
    txt_pag_biblio: "",
    txt_url_biblio: "",
    txt_fecha_pub_biblio: getActualYear(),
    txt_fecha_acc_biblio: undefined,
    fk_id_est: bibliomasSessionContext.userId,
    fk_id_carp: bibliomasSessionContext.folderId,
    fk_id_grup: bibliomasSessionContext.groupId,
  };

  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    UpdateWebSiteBibliographieSchema,
    ({
      ...props.bibliography.value,
      fk_id_carp: bibliomasSessionContext.folderId,
      fk_id_grup: bibliomasSessionContext.groupId,
      txt_tip_biblio: TYPE_PUBLICATION.SitioWeb,
    } as UpdateWebSiteBibliographie) ?? DEFAULT_FORM,
    async (data) => {
      props.loading.value = true;

      await fetch(`/api/bibliographie/${form.value.pk_id_biblio}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      form.value = DEFAULT_FORM;
      props.loading.value = false;
      props.onSubmit();
    },
  );

  return (
    <div>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <FormControl
          label="Formato"
          error={errors.value.txt_fmt_biblio}
          required
        >
          <select
            className="select select-primary select-bordered"
            name="txt_fmt_biblio"
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
            required
          />
        </FormControl>

        <DialogAction
          disabled={props.loading.value}
          loading={props.loading.value}
          onCancel={props.onCancel}
        />
      </Form>
    </div>
  );
}

export function BookForm(
  props: FormProps,
) {
  const bibliomasSessionContext = useBibliomasSessionContext();

  const DEFAULT_FORM = {
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
    fk_id_est: bibliomasSessionContext.userId,
    fk_id_carp: bibliomasSessionContext.folderId,
    fk_id_grup: bibliomasSessionContext.groupId,
  };

  const { form, handleChange, handleSubmit, errors } = useFormicaForm(
    UpdateBookBibliographieSchema,
    ({
      ...props.bibliography.value,
      fk_id_carp: bibliomasSessionContext.folderId,
      fk_id_grup: bibliomasSessionContext.groupId,
      txt_tip_biblio: TYPE_PUBLICATION.Libro,
    } as UpdateBookBibliographie) ?? DEFAULT_FORM,
    async (data) => {
      props.loading.value = true;
      const response = await fetch(
        `/api/bibliographie/${form.value.pk_id_biblio}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.status === 200) {
        const { data } = (await response.json()) as ApiResponse<Bibliografias>;
        await uploadFile(data.pk_id_biblio, bibliomasSessionContext.userId);
      }
      props.loading.value = false;
      props.onSubmit();
    },
  );

  const file = useSignal<File | null>(null);
  const fileErrors = useSignal("");

  const getBibliographyFile = async (bibliographyId: number) => {
    const response = await fetch(
      `/api/bibliographie/file/${bibliographyId}`,
    );

    const { data } = (await response.json()) as ApiResponse<Archivos | null>;

    return data;
  };

  async function uploadFile(bibliographieId: number, userId: string) {
    if (!file.value) {
      return;
    }

    const newBibliographieFile = file.value;
    const previousFile = await getBibliographyFile(bibliographieId);
    const filePath = previousFile
      ? previousFile.txt_url_arch
      : `${userId}/${crypto.randomUUID()}.pdf`;

    let error;
    if (previousFile) {
      const response = await supabase
        .storage
        .from(Bucket.bibliographyDocuments)
        .update(
          filePath,
          newBibliographieFile,
        );
      error = response.error;
    } else {
      const response = await supabase
        .storage
        .from(Bucket.bibliographyDocuments)
        .upload(
          filePath,
          newBibliographieFile,
        );
      error = response.error;
    }
    if (error) {
      return;
    }

    const body = {
      fk_id_biblio: bibliographieId,
      txt_url_arch: filePath,
    } as BibliographieFile;

    if (previousFile) {
      await fetch(`/api/bibliographie/file/${previousFile.pk_id_arch}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } else {
      await fetch("/api/bibliographie/file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
  }

  return (
    <div>
      <Form
        value={form.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <FormControl
          label="Formato"
          error={errors.value.txt_fmt_biblio}
          required
        >
          <select
            className="select select-primary select-bordered"
            name="txt_fmt_biblio"
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
            required
          />
        </FormControl>

        <FormControl label="Ubicación" error={errors.value.txt_ubic_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_ubic_biblio"
            disabled={props.loading.value}
          />
        </FormControl>

        <FormControl label="Editorial" error={errors.value.txt_edit_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_edit_biblio"
            disabled={props.loading.value}
          />
        </FormControl>

        <FormControl label="Volumen" error={errors.value.num_volm_biblio}>
          <input
            type="number"
            className="input input-primary"
            name="num_volm_biblio"
            disabled={props.loading.value}
          />
        </FormControl>

        <FormControl label="Edición" error={errors.value.num_edic_biblio}>
          <input
            type="number"
            className="input input-primary"
            name="num_edic_biblio"
            disabled={props.loading.value}
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
            disabled={props.loading.value}
          />
        </FormControl>
        <FormControl label="URL" error={errors.value.txt_url_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_url_biblio"
            disabled={props.loading.value}
          />
        </FormControl>
        <InputFile
          label="Archivo"
          value={file}
          error={fileErrors}
          name="file"
          disabled={props.loading.value}
          accept=".pdf"
        />
        <DialogAction
          disabled={props.loading.value}
          loading={props.loading.value}
          onCancel={props.onCancel}
        />
      </Form>
    </div>
  );
}

export function MoreForm(
  props: FormProps,
) {
  const bibliomasSessionContext = useBibliomasSessionContext();

  const DEFAULT_FORM = {
    pk_id_biblio: 0,
    txt_aut_biblio: "",
    txt_tit_biblio: "",
    txt_tip_biblio: TYPE_PUBLICATION.ArticuloRevista,
    txt_fmt_biblio: TYPE_FORMATS.Apa,
    bool_online_biblio: false,
    txt_edit_biblio: undefined,
    txt_fecha_pub_biblio: undefined,
    txt_url_biblio: undefined,
    fk_id_est: bibliomasSessionContext.userId,
    fk_id_carp: bibliomasSessionContext.folderId,
    fk_id_grup: bibliomasSessionContext.groupId,
  };

  const { form, errors, handleChange, handleSubmit } = useFormicaForm(
    UpdateMoreBibliographieSchema,
    ({
      ...props.bibliography.value,
      fk_id_carp: bibliomasSessionContext.folderId,
      fk_id_grup: bibliomasSessionContext.groupId,
      txt_tip_biblio: TYPE_PUBLICATION.ArticuloRevista,
    } as UpdateMoreBibliographie) ?? DEFAULT_FORM,
    async () => {
      props.loading.value = true;
      await fetch(`/api/bibliographie/${form.value.pk_id_biblio}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.value),
      });
      props.loading.value = false;
      props.onSubmit();
    },
  );

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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
            required
          >
            <option value="" disabled>Seleccione un tipo de publicación</option>
            {Object.entries(MORE_TYPE_PUBLICATION).map(([key, value]) => (
              <option value={value.value} className="uppercase">
                {value.name}
              </option>
            ))}
          </select>
        </FormControl>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text font-sans font-semibold">
              Recurso online
            </span>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              name="bool_online_biblio"
              disabled={props.loading.value}
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
            disabled={props.loading.value}
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
            disabled={props.loading.value}
            required
          />
        </FormControl>

        <FormControl
          label="Fecha de publicacion"
          error={errors.value.txt_fecha_pub_biblio}
        >
          <input
            type="number"
            className="input input-primary"
            name="txt_fecha_pub_biblio"
            disabled={props.loading.value}
          />
        </FormControl>

        <FormControl label="Editorial" error={errors.value.txt_edit_biblio}>
          <input
            type="text"
            className="input input-primary"
            name="txt_edit_biblio"
            disabled={props.loading.value}
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
            disabled={props.loading.value}
          />
        </FormControl>

        <DialogAction
          disabled={props.loading.value}
          loading={props.loading.value}
          onCancel={props.onCancel}
        />
      </Form>
    </div>
  );
}
