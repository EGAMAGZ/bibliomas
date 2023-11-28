import { useSignal, useSignalEffect } from "@preact/signals";
import { z, ZodFormattedError } from "zod";

export function useFormicaForm<TValues>(
  schema: z.ZodSchema<TValues>,
  initialValues: TValues,
  onSubmit: (values: TValues) => void,
) {
  type FormErrors = { [key in keyof TValues]: string };

  const isValid = useSignal(false);
  const form = useSignal<TValues>(initialValues);
  const errors = useSignal<FormErrors>({} as FormErrors);

  useSignalEffect(() => {
    const result = schema.safeParse(form.value);
    isValid.value = result.success;
    if (!result.success) {
      errors.value = formatErrors(result.error);
    } else {
      errors.value = clearErrors();
    }
  });
  const handleChange = (value: TValues) => {
    form.value = value;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    onSubmit(form.value);
  };

  const formatErrors = (error: z.ZodError<TValues>) => {
    const formattedErrors: ZodFormattedError<TValues> = error
      .format();
    return Object.keys(initialValues as Record<string, string>).reduce(
      (errors, key) => {
        errors[key] = formattedErrors[key]?._errors.join(", ") ?? "";
        return errors;
      },
      {} as FormErrors,
    );
  };

  const clearErrors = () => {
    return Object.fromEntries(
      Object.keys(initialValues as Record<string, string>).map((
        key,
      ) => [key, ""]),
    ) as FormErrors;
  };

  return {
    form,
    handleChange,
    errors,
    isValid,
    handleSubmit,
  };
}