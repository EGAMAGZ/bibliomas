import { useSignal, useSignalEffect } from "@preact/signals";
import { Input } from "@/islands/Input.tsx";
import Button from "@/components/Button.tsx";
import { REGISTER_URL } from "@/utils/config.ts";
import { LoginStudentSchema } from "@/schema/student.ts";

export default function LoginForm() {
  const username = useSignal("");
  const usernameErrors = useSignal("");

  const password = useSignal("");
  const passwordErrors = useSignal("");

  const isValid = useSignal(false);

  useSignalEffect(() => {
    const result = LoginStudentSchema.safeParse({
      username: username.value,
      password: password.value,
    });

    isValid.value = result.success;

    if (!result.success) {
      const formattedErrors = result.error.format();
      usernameErrors.value = formattedErrors.username?._errors.join(", ") ?? "";
      passwordErrors.value = formattedErrors.password?._errors.join(", ") ?? "";
    } else {
      usernameErrors.value = "";
      passwordErrors.value = "";
    }
  });

  return (
    <form class="flex flex-col items-center" method="POST">
      <Input
        value={username}
        error={usernameErrors}
        label="Usuario:"
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
      <div className="flex justify-center gap-8">
        <Button type="submit" state="btn-primary" disabled={!isValid.value}>
          <span>Iniciar sesión</span>
        </Button>
        <a href={REGISTER_URL} class="btn btn-secondary font-sans">
          <span>Registrarse</span>
        </a>
      </div>
    </form>
  );
}
