import { IconBook2, IconCircleX } from "@tabler-icons";
import {
  HandlerContext,
  Handlers,
  PageProps,
  RouteConfig,
} from "$fresh/server.ts";
import RegisterForm from "../../../islands/is-cu/RegisterForm.tsx";
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
import { Prisma } from "@/generated/client/deno/edge.ts";
import HomeDrawer from "@/components/HomeDrawer.tsx";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export const handler: Handlers<Data, SessionState> = {
  async GET(_req: Request, ctx: HandlerContext<Data, SessionState>) {
    return await ctx.render({
      error: "",
    });
  },
  async POST(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const formData = await req.formData();
    try {
      const { txt_email_est, txt_pass_est, txt_user_est } = NewStudentSchema
        .parse(
          Object.fromEntries(formData.entries()),
        );

      const student = await prismaClient.estudiantes.create({
        data: {
          txt_user_est,
          txt_email_est,
          txt_pass_est: await generateHash(txt_pass_est),
        },
      });

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
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          const columnName = (error.meta?.target as string[])[0];
          if (columnName === "txt_email_est") {
            return await ctx.render({
              error: "Correo electronico ya registrado",
            });
          }
          if (columnName === "txt_user_est") {
            return await ctx.render({
              error: "Nombre de usuario ya registrado",
            });
          }
        }
      }
      throw error;
    }
  },
};

export default function RegistrarPage({ data }: PageProps) {
  return (
    <HomeDrawer>
      <div className="w-full h-full flex flex-col justify-center items-center p-4">
        <div className="flex flex-col w-full max-w-2xl gap-4">
          <IconBook2 size={128} className="self-center" />

          {data.error && (
            <div className="alert alert-error font-sans">
              <IconCircleX size={24} />
              <span>{data.error}</span>
            </div>
          )}

          <span className="self-center text-5xl font-bold font-sans">
            Nuevo usuario a registrarse
          </span>
          <RegisterForm />
        </div>
      </div>
    </HomeDrawer>
  );
}
