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
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col pb-4">
        <Navbar username={username} email={email} />
        {children}
      </div>
      <div className="drawer-side">
        <label
          for="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <DraweMenu />
      </div>
    </div>
  );
}

function DraweMenu() {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
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
      <a href={menuOption.href} className="font-sans">{menuOption.name}</a>
    </li>
  );
}
