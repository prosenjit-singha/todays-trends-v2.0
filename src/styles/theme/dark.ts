import { createTheme } from "@mui/material";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#122345",
    },
  },
  shape: {
    borderRadius: 0,
  },
});
