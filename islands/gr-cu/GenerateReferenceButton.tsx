import { IconCheck, IconCopy } from "@tabler-icons";
import { IconButton } from "@/components/Button.tsx";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { Bibliografias } from "@/generated/client/deno/edge.ts";
import { generateReference } from "@/utils/reference.ts";

interface Props {
  bibliography: Bibliografias;
  disabled?: boolean;
}

export default function GenerateReferenceButton(props: Props) {
  const isClickable = useSignal(true);
  const message = useComputed(() =>
    isClickable.value ? "Generar referencia" : "Referencia copiada"
  );

  const handleClick = () => {
    if (!isClickable.value) {
      return;
    }

    isClickable.value = false;
    navigator.clipboard.writeText(generateReference(props.bibliography));
    setInterval(() => {
      isClickable.value = true;
    }, 1_500);
  };

  return (
    <IconButton
      tooltip={message.value}
      onClick={handleClick}
      disabled={props.disabled}
      showTooltip={!isClickable.value}
    >
      {isClickable.value ? <IconCopy size={20} /> : <IconCheck size={20} />}
    </IconButton>
  );
}
