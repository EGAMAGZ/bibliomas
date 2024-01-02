import { IconBook2, IconMenu2 } from "@tabler-icons";
import { ROOT_URL } from "@/utils/config.ts";
import { MenuOption, menuOptions } from "../data/menu-options.ts";
import InstallButton from "@/islands/InstallButton.tsx";

export interface AppNavbarProps {
  username: string;
  email: string;
}

export default function AppNavbar({ email, username }: AppNavbarProps) {
  return (
    <div className="navbar font-sans">
      <div className="navbar-start">
        <label for="app-drawer" className="btn btn-square btn-ghost lg:hidden">
          <IconMenu2 size={24} />
        </label>
        <NavbarMenu />
      </div>
      <div className="navbar-center">
        <a href={ROOT_URL} className="btn btn-ghost normal-case text-xl">
          Bibliomas
        </a>
      </div>
      <div className="navbar-end gap-2">
        <InstallButton classList="hidden lg:btn lg:btn-xs text-xs lg:btn-accent" />
        <div className="badge badge-primary badge-lg">
          <span>
            {username}
          </span>
          <span className="hidden lg:inline-block">
            - {email}
          </span>
        </div>
        <IconBook2 size={36} />
      </div>
    </div>
  );
}

function NavbarMenu() {
  return (
    <div className="hidden lg:dropdown">
      <label tabindex={0} className="btn btn-ghost">
        <IconMenu2 size={24} />
      </label>
      <ul
        tabindex={0}
        className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
      <a href={menuOption.href} className="font-sans">{menuOption.name}</a>
    </li>
  );
}
