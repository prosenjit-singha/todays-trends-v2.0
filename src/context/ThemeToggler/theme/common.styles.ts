import { ThemeOptions, Zoom } from "@mui/material";

export const commonStyles: ThemeOptions = {
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        enterDelay: 500,
        TransitionComponent: Zoom,
      },
      styleOverrides: {
        tooltip: {
          borderRadius: 2.5,
        },
      },
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto","Helvetica","Arial",sans-serif',
  },
};
