import {
  AppBar,
  Toolbar,
  IconButton,
  lighten,
  Tooltip,
  InputBase,
  Box,
} from "@mui/material";
import Navlinks from "./Navlinks";
import Logo from "../Logo";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeToggler } from "../../context/ThemeToggler";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  const { theme, toggleTheme } = useThemeToggler();
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      sx={{
        bgcolor: (props) => lighten(props.palette.background.paper, 0.025),
      }}
    >
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
        {/* Search Box */}
        <Box sx={{ display: ["none", "block", "none"] }}>
          <InputBase
            sx={{ mx: 2, flex: 1, maxWidth: 250 }}
            placeholder="Search News"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton>
            <BiSearch />
          </IconButton>
        </Box>
        {/* Nav Links */}
        <Navlinks />
        {/* Theme Toggler */}
        <Tooltip title="Toggle Theme" describeChild>
          <IconButton
            onClick={toggleTheme}
            sx={{
              p: 0.5,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Tooltip>
        {/* Menu button */}
        <Tooltip title="Menu" describeChild>
          <IconButton
            sx={{
              display: ["flex", "flex", "none"],
              p: 0.5,
            }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <MenuDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    </AppBar>
  );
}

export default Navbar;
