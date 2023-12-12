import { IconDownload } from "@tabler-icons";
import { IconButton } from "@/components/Button.tsx";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { Archivos } from "@/generated/client/deno/edge.ts";
import { ApiResponse } from "@/schema/api-response.ts";
import { Bucket, supabase } from "@/database/supabase.ts";

interface DownloadFileButtonProps {
  bibliographyId: number;
  title: string;
  disabled: boolean;
}

export default function DownloadFileButton(props: DownloadFileButtonProps) {
  const isLoading = useSignal(true);

  const bibliographyFile = useSignal<Archivos | null>(null);
  const publicUrl = useSignal<string | null>(null);

  const message = useComputed(() =>
    bibliographyFile.value ? "Descargar archivo" : "No tiene archivo"
  );

  const disabled = useComputed(() =>
    isLoading.value || !bibliographyFile.value
  );

  useSignalEffect(() => {
    const fetchBibliographyFile = async () => {
      isLoading.value = true;

      const response = await fetch(
        `/api/bibliographie/file/${props.bibliographyId}`,
      );
      const { data } = (await response.json()) as ApiResponse<Archivos | null>;

      if (response.status === 200) {
        bibliographyFile.value = data;
      }
      isLoading.value = false;
    };

    fetchBibliographyFile();
  });

  const handleDownloadFile = async () => {
    isLoading.value = true;
    if (bibliographyFile.value === null) {
      return;
    }
    const { txt_url_arch } = bibliographyFile.value;
    const { data, error } = await supabase
      .storage
      .from(Bucket.bibliographyDocuments)
      .download(txt_url_arch);

    if (error) {
      isLoading.value = false;
      console.error(error);
      return;
    }
    const blob = data as Blob;
    const fileName = `${props.title}.pdf`;

    const blobURL = URL.createObjectURL(blob);
    const linkElement = document.createElement("a");

    linkElement.href = blobURL;
    linkElement.download = fileName;
    linkElement.click();

    URL.revokeObjectURL(blobURL);

    isLoading.value = false;
  };

  return (
    <IconButton
      tooltip={message.value}
      disabled={props.disabled || disabled.value}
      onClick={handleDownloadFile}
    >
      {isLoading.value
        ? <span className="loading loading-spinner"></span>
        : <IconDownload />}
    </IconButton>
  );
}
