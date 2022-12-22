import { useState } from "react";
import { createContext } from "react";
import { ThemeOptions } from "@mui/material";

const ThemeTogglerContext = createContext<ThemeOptions | null>(
  {} as ThemeOptions
);

type PropsType = {
  children: React.ReactNode;
};

export const ThemeTogglerProvider = ({ children }: PropsType) => {
  const [theme, setTheme] = useState();

  return (
    <ThemeTogglerContext.Provider value={null}> </ThemeTogglerContext.Provider>
  );
};
