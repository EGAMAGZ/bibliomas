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
  console.log(
    `Main middleware - Pathname: ${url.pathname} - Method: ${req.method}`,
  );

  // Se salta validacion para API
  if (url.pathname.startsWith("/api")) {
    return await ctx.next();
  }

  const { userSession } = getCookies(req.headers);
  console.log(`Main middleware - User Session: ${userSession}`);

  if (userSession === undefined) {
    // KATHY AQUI MODIFICAS
    if (url.pathname === LOGIN_URL || 
      url.pathname === REGISTER_URL || 
      url.pathname === "/" ||
      url.pathname === "/about" ||
      url.pathname === "/suscription") {
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
    const { payload } = await verifyJWT(userSession);

    // ctx.state.isLoggedIn = true;
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

  // KATHY AQUI MODIFICAS
  if (
    url.pathname === LOGIN_URL || 
    url.pathname === REGISTER_URL || 
    url.pathname === "/" ||
    url.pathname === "/about" ||
    url.pathname === "/suscription") {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": ROOT_URL,
      },
    });
  }
  return await ctx.next();
}
