import { IconBook2, IconCircleX } from "@tabler-icons";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import LoginForm from "@/islands/inicio-sesion/LoginForm.tsx";
import { LoginStudentSchema } from "@/schema/student.ts";
import prismaClient from "@/database/prisma.ts";
import { compareHash } from "@/utils/hash.ts";
import { signJWT } from "@/utils/jwt.ts";
import { setCookie } from "$cookies";
import {
  COOKIE_MAX_AGE,
  COOKIE_PATH,
  ROOT_URL,
  SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { z } from "zod";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();
    try {
      const { username, password } = LoginStudentSchema.parse(
        Object.fromEntries(formData.entries()),
      );
      const student = await prismaClient.estudiantes.findUnique({
        where: {
          txt_user_est: username,
        },
      });

      if (student === null) {
        return await ctx.render({
          error: "Usuario o contraseña son incorrectos.",
        });
      }

      const isSame = compareHash(password, student.txt_pass_est);

      if (!isSame) {
        return await ctx.render({
          error: "Usuario o contraseña son incorrectos.",
        });
      }

      const jwt = await signJWT({
        id: student.pk_id_est,
        username: student.txt_user_est,
        email: student.txt_email_est,
        subscription: String(student.num_sub_est),
      });
      const headers = new Headers(req.headers);

      setCookie(headers, {
        name: SESSION_COOKIE_NAME,
        value: jwt,
        maxAge: COOKIE_MAX_AGE,
        path: COOKIE_PATH,
      });

      headers.append("Location", ROOT_URL);

      return new Response(null, {
        headers,
        status: 303,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return await ctx.render({
          error: error.issues.map((issue) => issue.message).join(", "),
        });
      }
      throw error;
    }
  },
};

export default function IniciarSesionPage({ data }: PageProps) {
  return (
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="flex flex-col w-full max-w-2xl gap-4">
        <IconBook2 size={128} class="self-center" />
        {data.error && (
          <div class="alert alert-error font-sans">
            <IconCircleX size={24} />
            <span>{data.error}</span>
          </div>
        )}
        <span class="self-center text-5xl font-bold font-sans">
          Introduzca sus credenciales
        </span>

        <LoginForm />
      </div>
    </div>
  );
}
