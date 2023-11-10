import { Signal, useComputed, useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Width = new Map<string, string>([
  ["xs", "max-w-xs"],
  ["sm", "max-w-sm"],
  ["md", "max-w-md"],
  ["lg", "max-w-lg"],
]);

type InputSizes = "xs" | "sm" | "md" | "lg";

interface InputProps {
  value: Signal<string>;
  error: Signal<string>;
  label: string;
  type: "email" | "number" | "password" | "text" | "tel" | "date";
  name: string;
  required?: boolean;
  disabled?: boolean;
  classList?: string;
  inputClassList?: string;
}

export function Input(props: InputProps) {
  const isTouched = useSignal(false);

  const showErrors = useComputed(() =>
    isTouched.value && props.error.value !== ""
  );

  const handleFocus = () => {
    isTouched.value = true;
  };

  const handleBlur = () => {
    isTouched.value = true;
  };

  const handleInput = (event: Event) => {
    props.value.value = (event.target as HTMLInputElement).value;
  };

  return (
    <div
      class={`font-sans form-control ${props.classList ?? ""} w-full`}
    >
      <label class="label">
        <span class="label-text font-semibold">
          {props.required && <span class="text-red-500">*</span>}
          {props.label}
        </span>
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        required={props.required}
        disabled={!IS_BROWSER || props.disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        class={`input input-bordered ${
          showErrors.value ? "input-error" : "input-primary"
        } ${props.inputClassList ?? ""}`}
      />
      <label class="label">
        <span class="label-text text-error">
          {showErrors.value && props.error}
        </span>
      </label>
    </div>
  );
}
