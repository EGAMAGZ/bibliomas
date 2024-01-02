// deno-lint-ignore-file no-window-prefix
import { useComputed, useSignal, useSignalEffect } from "@preact/signals";
import { IconDownload } from "@tabler-icons";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface InstallButtonProps {
  classList?: string;
}

export default function InstallButton(props: InstallButtonProps) {
  const isLoading = useSignal(true);
  const isInstalled = useSignal(true);
  const isDisabled = useComputed(() => isLoading.value);
  // deno-lint-ignore no-explicit-any
  const installPromptEvent = useSignal<any | null>(null);

  useSignalEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();

      installPromptEvent.value = event;
      isLoading.value = false;
      isInstalled.value = false;
    };

    const handleAppInstalled = () => {
      disableInstallPrompt();
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );

      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  });

  const handleClick = async () => {
    if (!installPromptEvent.value) {
      return;
    }
    const result = await installPromptEvent.value.prompt();

    disableInstallPrompt();
  };

  const disableInstallPrompt = () => {
    installPromptEvent.value = null;
    isInstalled.value = true;
  };

  return (
    <button
      type="button"
      class={`${isInstalled.value ? "hidden" : props.classList}`}
      onClick={handleClick}
      disabled={!IS_BROWSER || isDisabled.value}
    >
      <IconDownload size={18} />
      <span>Instalar</span>
    </button>
  );
}
