import { ComponentChildren } from "preact";
import {
  BibliomasSession,
  BibliomasSessionContext,
} from "@/context/session-context.ts";

interface BibliomasSessionProviderProps {
  children: ComponentChildren;
  value: BibliomasSession;
}

export default function BibliomasSessionProvider(
  props: BibliomasSessionProviderProps,
) {
  return (
    <BibliomasSessionContext.Provider value={props.value}>
      {props.children}
    </BibliomasSessionContext.Provider>
  );
}
