import { HandlerContext, Handlers } from "$fresh/server.ts";
import { ROOT_URL } from "@/utils/config.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const headers = new Headers(req.headers);

    headers.set("Location", ROOT_URL);

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
