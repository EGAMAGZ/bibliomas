import { IS_BROWSER } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

type InputState =
  | "btn-neutral"
  | "btn-primary"
  | "btn-secondary"
  | "btn-accent"
  | "btn-info"
  | "btn-success"
  | "btn-warning"
  | "btn-error"
  | "btn-ghost";

interface ButtonProps {
  state: InputState;
  type: "button" | "submit";
  onClick?: (event: Event) => void;
  children: ComponentChildren;
  classList?: string;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`btn ${props.state} font-sans font-semibold ${
        props.classList ?? ""
      }`}
      type={props.type}
      disabled={!IS_BROWSER || props.disabled}
      onClick={props.onClick}
    >
      {props.loading
        ? (
          <>
            <span className="loading loading-spinner"></span>
            Cargando
          </>
        )
        : (
          props.children
        )}
    </button>
  );
}

interface IconButtonProps {
  onClick?: (event: Event) => void;
  children: ComponentChildren;
  tooltip: string;
  disabled?: boolean;
}

export function IconButton(props: IconButtonProps) {
  return (
    <div
      class="tooltip tooltip-secondary"
      data-tip={props.tooltip}
    >
      <button
        class="btn btn-circle btn-sm btn-secondary"
        onClick={props.onClick}
        type="button"
        disabled={!IS_BROWSER || props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
}
