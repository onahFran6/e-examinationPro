"use client";

import { createContext, useContext, useState, useMemo } from "react";

// ----------------------------------------------------------------------

const ModeContext = createContext({} as any);

export const useModeContext = () => {
  const context = useContext(ModeContext);

  return context;
};

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}
