export const ROOT_URL = "/inicio-sesion";

export const LOGIN_URL = "/inicio-sesion/iniciar-sesion";

export const LOGOUT_URL = "/inicio-sesion/cerrar-sesion";

export const REGISTER_URL = "/inicio-sesion/registrar";

export const JWT_SECRET = new TextEncoder().encode(
  "LDZH3yUEsQ",
);

export const JWT_ALG = "HS256";

export const COOKIE_MAX_AGE = 60_000;

export const BCRYPT_SALT = 8;

export const SESSION_COOKIE_NAME = "userSession";

export const COOKIE_PATH = "/"