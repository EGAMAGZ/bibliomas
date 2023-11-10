import { useSignal, useSignalEffect } from "@preact/signals";
import { Input } from "@/islands/Input.tsx";
import Button from "@/components/Button.tsx";
import { LOGIN_URL } from "@/utils/config.ts";
import { NewStudentSchema } from "@/schema/student.ts";

export default function RegisterForm() {
  const email = useSignal("");
  const emailErrors = useSignal("");

  const username = useSignal("");
  const usernameErrors = useSignal("");

  const password = useSignal("");
  const passwordErrors = useSignal("");

  const confirmPassword = useSignal("");
  const confirmPasswordErrors = useSignal("");

  const isValid = useSignal(false);
  useSignalEffect(() => {
    const result = NewStudentSchema.safeParse({
      email: email.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    isValid.value = result.success;

    if (!result.success) {
      const formattedErrors = result.error.format();
      emailErrors.value = formattedErrors.email?._errors.join(", ") ?? "";
      usernameErrors.value = formattedErrors.username?._errors.join(", ") ?? "";
      passwordErrors.value = formattedErrors.password?._errors.join(", ") ?? "";
      confirmPasswordErrors.value =
        formattedErrors.confirmPassword?._errors.join(", ") ?? "";
    } else {
      emailErrors.value = "";
      usernameErrors.value = "";
      passwordErrors.value = "";
      confirmPasswordErrors.value = "";
    }
  });

  return (
    <form class="flex flex-col items-center" method="POST">
      <Input
        value={email}
        error={emailErrors}
        label="Correo:"
        type="email"
        name="email"
        classList="w-full max-w-xs"
        inputClassList="w-full max-w-xs"
        required
      />

      <Input
        value={username}
        error={usernameErrors}
        label="Nombre de usuario:"
        type="text"
        name="username"
        classList="w-full max-w-xs"
        inputClassList="w-full max-w-xs"
        required
      />

      <Input
        value={password}
        error={passwordErrors}
        label="Contraseña:"
        type="password"
        name="password"
        classList="w-full max-w-xs"
        inputClassList="w-full max-w-xs"
        required
      />

      <Input
        value={confirmPassword}
        error={confirmPasswordErrors}
        label="Confirmar contraseña:"
        type="password"
        name="confirmPassword"
        classList="w-full max-w-xs"
        inputClassList="w-full max-w-xs"
        required
      />

      <div class="flex justify-center gap-8">
        <Button type="submit" state="btn-primary" disabled={!isValid.value}>
          <span>Aceptar</span>
        </Button>
        <a href={LOGIN_URL} class="btn btn-secondary font-sans">
          <span>Cancelar</span>
        </a>
      </div>
    </form>
  );
}
