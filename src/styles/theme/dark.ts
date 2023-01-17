import { createTheme } from "@mui/material";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff3b3b",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto","Helvetica","Arial",sans-serif',
  },
});
