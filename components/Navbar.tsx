import { IconBook2, IconMenu2 } from "@tabler-icons";
import { ROOT_URL } from "@/utils/config.ts";
import { MenuOption, menuOptions } from "../data/menu-options.ts";

export interface NavbarProps {
  username: string;
  email: string;
}

export default function Navbar({ email, username }: NavbarProps) {
  return (
    <div class="navbar font-sans">
      <div class="flex-none ">
        <label for="app-drawer" class="btn btn-square btn-ghost lg:hidden">
          <IconMenu2 size={24} />
        </label>
        <NavbarMenu />
      </div>
      <div class="flex-1">
        <a href={ROOT_URL} class="btn btn-ghost normal-case text-xl">
          Bibliomas
        </a>
      </div>
      <div class="flex-none">
        <div class="badge badge-primary badge-lg">
          {username} | {email}
        </div>
        <IconBook2 size={36} />
      </div>
    </div>
  );
}

function NavbarMenu() {
  return (
    <div class="hidden lg:dropdown">
      <label tabindex={0} class="btn btn-ghost">
        <IconMenu2 size={24} />
      </label>
      <ul
        tabindex={0}
        class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {menuOptions.map((menuOption) => (
          <NavbarMenuItem menuOption={menuOption} />
        ))}
      </ul>
    </div>
  );
}

interface NavbarMenuItemProps {
  menuOption: MenuOption;
}

function NavbarMenuItem({ menuOption }: NavbarMenuItemProps) {
  return (
    <li>
      <a href={menuOption.href} class="font-sans">{menuOption.name}</a>
    </li>
  );
}
