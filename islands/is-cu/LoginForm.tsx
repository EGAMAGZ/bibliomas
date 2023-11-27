import { Form, FormGroup } from "formika";
import { useSignal, useSignalEffect } from "@preact/signals";
import { Input } from "@/islands/Input.tsx";
import Button from "@/components/Button.tsx";
import { REGISTER_URL } from "@/utils/config.ts";
import { LoginStudentSchema } from "@/schema/student.ts";
import { z } from "zod";
import { useFormicaForm } from "../../hooks/use-formica-form.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

const BioSchema = z.object({
  name: z.string().nonempty(),
  bio: z.string().nonempty(),
  website: z.string().url(),
});

export default function LoginForm() {
  const { form, handleChange, errors, isValid, handleSubmit } = useFormicaForm(
    BioSchema,
    {
      name: "John DOe",
      bio: "Hello, I'm John Doe and ...",
      website: "http://example.com",
    },
    (values) => {
      console.log("ASD");
    },
  );

  return (
    <>
      <Form
        value={form.value}
        onChange={handleChange}
      >
        <span>{String(isValid.value)}</span>
        <label>
          Name: <input name="name" type="text" required />
        </label>
        <label>
          Bio: <textarea name="bio" maxLength={250} />
        </label>
        <label>
          Website:{" "}
          <input
            name="website"
            type="text"
            pattern="(http://|https://)\S{1,63}"
          />
        </label>
        <button type="submit" disabled={!IS_BROWSER || !isValid.value}>
          <span>Submit</span>
        </button>
      </Form>
      <pre>{JSON.stringify(form, null, '\t')}</pre>
      {
        /*<form className="flex flex-col items-center" method="POST">
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
          <a href={REGISTER_URL} className="btn btn-secondary font-sans">
            <span>Registrarse</span>
          </a>
        </div>
      </form> */
      }
    </>
  );
}
