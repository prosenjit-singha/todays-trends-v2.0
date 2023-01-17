import { createTheme } from "@mui/material";
import { commonStyles } from "./common.styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#1e2331",
      paper: "#1e2331",
    },
  },
  ...commonStyles,
});
