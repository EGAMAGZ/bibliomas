import { ComponentChildren } from "preact";
import HomeNavbar from "@/components/HomeNavbar.tsx";
import { MenuOption, startOptions } from "@/data/menu-options.ts";

interface HomeDrawerProps {
  children: ComponentChildren;
}

export default function HomeDrawer(
  { children }: HomeDrawerProps,
) {
  return (
    <div class="drawer">
      <input id="home-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col pb-4">
        <HomeNavbar />
        {children}
      </div>
      <div class="drawer-side">
        <label
          for="home-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <DrawerMenu />
      </div>
    </div>
  );
}

function DrawerMenu() {
  return (
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      {startOptions.map((startOption) => (
        <DrawerMenuItem menuOption={startOption} />
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
