import { useContext } from "preact/hooks";
import { createContext } from "preact";
export type BibliomasSession = {
  userId: string;
  folderId?: number;
  groupId?: number;
};

export const BibliomasSessionContext = createContext<
  BibliomasSession | undefined
>(
  undefined,
);

export function useBibliomasSessionContext() {
  const context = useContext(BibliomasSessionContext);

  if (context === undefined) {
    throw new Error("useUserSession must be used within a UserSessionProvider");
  }

  return context;
}
