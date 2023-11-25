import {
  Signal,
  useComputed,
  useSignal,
  useSignalEffect,
} from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

type InputTypes = "email" | "number" | "password" | "text" | "tel" | "date";

interface InputProps {
  value: Signal<string>;
  error: Signal<string>;
  label: string;
  type: InputTypes;
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
      className={`font-sans form-control ${props.classList ?? ""} w-full`}
    >
      <label className="label">
        <span className="label-text font-semibold">
          {props.label}
          {props.required && <span className="text-red-500">*</span>}
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
        className={`input input-bordered ${
          showErrors.value ? "input-error" : "input-primary"
        } ${props.inputClassList ?? ""}`}
      />
      <label className="label">
        <span className="label-text text-error">
          {showErrors.value && props.error}
        </span>
      </label>
    </div>
  );
}

interface InputFileProps {
  value: Signal<File | null>;
  error: Signal<string>;
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  classList?: string;
  inputClassList?: string;
  accept?: string;
}

export function InputFile(props: InputFileProps) {
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

  const handleChange = (event: Event) => {
    props.value.value = (event.target as HTMLInputElement).files![0];
  };

  return (
    <div className={`form-control w-full font-sans ${props.classList ?? ""}`}>
      <label className="label">
        <span className="label-text font-semibold">
          {props.label}
          {props.required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <input
        type="file"
        name={props.name}
        required={props.required}
        disabled={!IS_BROWSER || props.disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`file-input file-input-bordered w-full ${
          showErrors.value ? "file-input-error" : "file-input-primary"
        } ${props.inputClassList ?? ""}`}
        accept={props.accept}
      />
      <label className="label">
        <span className="label-text text-error">
          {showErrors.value && props.error}
        </span>
      </label>
    </div>
  );
}

interface InputCheckbox {
  value: Signal<boolean>;
  error: Signal<string>;
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  classList?: string;
  inputClassList?: string;
}

export function InputCheckbox(props: InputCheckbox) {
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

  const handleChange = (event: Event) => {
    props.value.value = (event.target as HTMLInputElement).checked;
  };

  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text font-sans font-semibold">{props.label}</span>
        <input
          type="checkbox"
          checked={props.value.value}
          name={props.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`checkbox 
                       ${
            showErrors.value ? "checkbox-error" : "checkbox-primary"
          } 
                       ${props.inputClassList ?? ""}`}
          required={props.required}
          disabled={!IS_BROWSER || props.disabled}
        />
      </label>
    </div>
  );
}
