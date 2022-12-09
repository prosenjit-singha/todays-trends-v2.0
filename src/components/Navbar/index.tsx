import { AppBar, Toolbar, Button } from "@mui/material";
import Navlinks from "./Navlinks";
import Logo from "../Logo";

function Navbar() {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Logo
          style={{
            marginRight: "auto",
          }}
        />
        {/* Nav Links */}
        <Navlinks />
        {/* Menu button */}
        <Button
          sx={{
            display: ["block", "none"],
          }}
        >
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
