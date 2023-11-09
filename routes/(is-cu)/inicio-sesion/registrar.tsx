import { IconBook2 } from "@tabler-icons";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import RegisterForm from "@/islands/inicio-sesion/RegisterForm.tsx";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import { NewStudentSchema } from "@/schema/student.ts";
import prismaClient from "@/database/prisma.ts";
import { generateHash } from "@/utils/hash.ts";
import { signJWT } from "@/utils/jwt.ts";
import {
  COOKIE_MAX_AGE,
  COOKIE_PATH,
  ROOT_URL,
  SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { z } from "zod";
import { setCookie } from "$cookies";

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();
    try {
      const { username, email, password, confirmPassword } = NewStudentSchema
        .parse(
          Object.fromEntries(formData.entries()),
        );

      const stundet = await prismaClient.estudiantes.create({
        data: {
          txt_user_est: username,
          txt_email_est: email,
          txt_pass_est: await generateHash(password),
        },
      });

      const jwt = await signJWT({
        id: stundet.pk_id_est,
        email: stundet.txt_email_est,
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

export default function RegistrarPage(props: PageProps) {
  return (
    <div class="w-full h-full flex flex-col justify-center items-center p-4">
      <div class="flex flex-col w-full max-w-2xl gap-4">
        {props.data.error}
        <IconBook2 size={128} class="self-center" />
        <span class="self-center text-5xl font-bold font-sans">
          Nuevo usuario a registrarse
        </span>
        <RegisterForm />
      </div>
    </div>
  );
}
