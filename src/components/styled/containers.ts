import { styled } from "@mui/material";

export const Main = styled("main")(({ theme }) => ({
  minHeight: "100vh",
  [theme.breakpoints.up("sm")]: {
    marginTop: "64px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "54px",
  },
}));
