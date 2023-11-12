import { ComponentChildren } from "preact";
import Navbar from "@/components/Navbar.tsx";
import { MenuOption, menuOptions } from "../data/menu-options.ts";

interface DrawerProps {
  children: ComponentChildren;
  username: string;
  email: string;
}

export default function Drawer({ children, username, email }: DrawerProps) {
  return (
    <div class="drawer">
      <input id="app-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <Navbar username={username} email={email} />
        {children}
      </div>
      <div class="drawer-side">
        <label
          for="app-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <DraweMenu />
      </div>
    </div>
  );
}

function DraweMenu() {
  return (
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      {menuOptions.map((menuOption) => (
        <DrawerMenuItem menuOption={menuOption} />
      ))}
    </ul>
  );
}

interface DrawerMenuItemProps {
  menuOption: MenuOption;
}

function DrawerMenuItem({ menuOption }: DrawerMenuItemProps) {
  return (
    <li>
      <a href={menuOption.href} class="font-sans">{menuOption.name}</a>
    </li>
  );
}
