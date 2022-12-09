import { AppBar, Toolbar } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      sx={
        {
          // bgcolor: "white",
        }
      }
    >
      <Toolbar>Logo</Toolbar>
    </AppBar>
  );
}

export default Navbar;
