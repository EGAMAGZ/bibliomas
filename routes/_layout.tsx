import { LayoutProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import AppDrawer from "@/components/AppDrawer.tsx";

export default function Layout(
  { Component, state }: LayoutProps<Data, SessionState>,
) {
  return (
    <AppDrawer username={state.username} email={state.email}>
      <Component />
    </AppDrawer>
  );
}
