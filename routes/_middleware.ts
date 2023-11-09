import SessionState from "@/schema/session-state.ts";
import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$cookies";
import { LOGIN_URL, REGISTER_URL, ROOT_URL } from "@/utils/config.ts";
import { verifyJWT } from "@/utils/jwt.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  // Solo validara para las rutas
  if (ctx.destination !== "route") return await ctx.next();

  const url = new URL(req.url);
  console.log(`Main middleware - Pathname: ${url.pathname}`);

  // Se salta validacion para API
  if (url.pathname.startsWith("/api")) {
    return await ctx.next();
  }

  const { userSession } = getCookies(req.headers);
  console.log(`Main middleware - User Session: ${userSession}`);

  if (userSession === undefined) {
    ctx.state.isLoggedIn = false;
    if (url.pathname === LOGIN_URL || url.pathname === REGISTER_URL) {
      return await ctx.next();
    }

    const headers = new Headers(req.headers);
    headers.append("Location", LOGIN_URL);

    return new Response(null, {
      status: 303,
      headers,
    });
  }

  try {
    const { payload, protectedHeader } = await verifyJWT(userSession);

    ctx.state.isLoggedIn = true;
    ctx.state._id = payload.id as string;
    ctx.state.username = payload.username as string;
    ctx.state.email = payload.email as string;
    ctx.state.subscription = payload.subscription as number;
  } catch (_error) {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": LOGIN_URL,
      },
    });
  }

  if (url.pathname === LOGIN_URL || url.pathname === REGISTER_URL) {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": ROOT_URL,
      },
    });
  }
  return await ctx.next();
}
