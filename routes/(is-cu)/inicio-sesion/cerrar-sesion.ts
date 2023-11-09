import { HandlerContext, Handlers } from "$fresh/server.ts";
import { COOKIE_PATH, LOGIN_URL, SESSION_COOKIE_NAME } from "@/utils/config.ts";
import { deleteCookie } from "$cookies";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const headers = new Headers(req.headers);

    deleteCookie(headers, SESSION_COOKIE_NAME, {
      path: COOKIE_PATH,
    });

    headers.set("Location", LOGIN_URL);

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
