import { createTheme } from "@mui/material";
import { commonStyles } from "./common.styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
  ...commonStyles,
});
