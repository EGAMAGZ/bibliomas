import { LayoutProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import Drawer from "@/components/Drawer.tsx";

export default function Layout(
  { Component, state }: LayoutProps<Data, SessionState>,
) {
  return (
    <>
      <Drawer username={state.username} email={state.email}>
        <Component />
      </Drawer>
    </>
  );
}
