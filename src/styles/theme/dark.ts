import { createTheme } from "@mui/material";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
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
