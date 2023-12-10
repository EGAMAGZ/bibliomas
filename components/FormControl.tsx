import { ComponentChildren } from "preact";
interface FormControlProps {
  label: string;
  required?: boolean;
  classList?: string;
  error?: string;
  children: ComponentChildren;
}
export default function FormControl(props: FormControlProps) {
  return (
    <div className={`font-sans form-control w-full ${props.classList}`}>
      <label className="label">
        <span className="label-text font-semibold">
          {props.label}
          {props.required &&
            <span className="text-red-500">*</span>}
        </span>
      </label>

      {props.children}

      <label className="label">
        <span className="label-text text-error">
          {props.error && props.error}
        </span>
      </label>
    </div>
  );
}
