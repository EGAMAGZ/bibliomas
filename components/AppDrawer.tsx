import { ComponentChildren } from "preact";
import AppNavbar from "./AppNavbar.tsx";
import { MenuOption, menuOptions } from "@/data/menu-options.ts";
import InstallButton from "@/islands/InstallButton.tsx";

interface AppDrawerProps {
  children: ComponentChildren;
  username: string;
  email: string;
}

export default function AppDrawer(
  { children, username, email }: AppDrawerProps,
) {
  return (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col pb-4">
        <AppNavbar username={username} email={email} />
        {children}
      </div>
      <div className="drawer-side">
        <label
          for="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <DrawerMenu />
      </div>
    </div>
  );
}

function DrawerMenu() {
  return (
    <>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {menuOptions.map((menuOption) => (
          <DrawerMenuItem menuOption={menuOption} />
        ))}
        <li class="mt-4">
          <InstallButton classList="btn btn-accent btn-sm font-sans pwa:hidden" />
        </li>
      </ul>
    </>
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
