import { styled } from "@mui/material";

export const Main = styled("main")(({ theme }) => ({
  minHeight: "calc(100vh - 64px)",
  [theme.breakpoints.up("sm")]: {
    marginTop: "64px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "54px",
  },
}));
