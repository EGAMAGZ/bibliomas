import { IconBook2, IconMenu2 } from "@tabler-icons";
import { LayoutProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";

export default function Layout(
  { Component, state }: LayoutProps<Data, SessionState>,
) {
  return (
    <>
      <nav class="navbar font-sans border-black">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <IconMenu2 size={24} />
          </button>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Bibliomas</a>
        </div>
        <div class="flex-none">
          <div class="badge badge-primary badge-lg">
            {state.username} | {state.email}
          </div>
          <IconBook2 size={36} />
        </div>
      </nav>
      <Component />
    </>
  );
}
