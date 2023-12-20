import { LOGOUT_URL, ROOT_URL } from "@/utils/config.ts";
export interface MenuOption {
  name: string;
  href: string;
}

export const menuOptions: MenuOption[] = [
  {
    name: "Inicio",
    href: ROOT_URL,
  },
  {
    name: "Mis referencias",
    href: "/gestionar-referencias",
  },
  {
    name: "Mis carpetas",
    href: "/gestionar-carpetas",
  },
  {
    name: "Mis grupos",
    href: "#",
  },
  {
    name: "Cerrar sesión",
    href: LOGOUT_URL,
  },
];
