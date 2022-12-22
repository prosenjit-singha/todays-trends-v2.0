import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  lighten,
  Tooltip,
} from "@mui/material";
import Navlinks from "./Navlinks";
import Logo from "../Logo";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeToggler } from "../../context/ThemeToggler";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { theme, toggleTheme } = useThemeToggler();
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

        {/* Nav Links */}
        <Navlinks />
        {/* Theme Toggler */}
        <Tooltip title="Toggle Theme" describeChild>
          <IconButton onClick={toggleTheme} sx={{ p: 0.5 }}>
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
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
