import { createTheme } from "@mui/material";
import { commonStyles } from "./common.styles";

export const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      // paper: "#f0f8fc",
    },
  },
  ...commonStyles,
});
