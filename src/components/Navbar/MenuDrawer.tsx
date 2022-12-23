import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowForwardRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { useThemeToggler } from "../../context/ThemeToggler";
import { AntSwitch } from "../styled/switches";
import navlinks from "../../data/navlinks";

type PropsType = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function MenuDrawer({ open, onClose, onOpen }: PropsType) {
  const { theme, toggleTheme } = useThemeToggler();
  function handleLinkClick() {
    handleClose();
  }

  function handleClose() {
    onClose();
  }
  function handleOpen() {
    onOpen();
  }
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClose} sx={{ pl: 4, pr: 7 }}>
            <ListItemIcon sx={{ color: "text.secondary" }}>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Close" sx={{ color: "text.secondary" }} />
          </ListItemButton>
        </ListItem>
      </List>
      {/* Nav links */}
      <nav aria-label="main mailbox folders">
        <List>
          {navlinks.map(({ text, Icon, to }, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton
                onClick={handleLinkClick}
                component={Link}
                to={to}
                sx={{ pl: 4, pr: 7 }}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "text.primary" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ pl: 4, pr: 4 }} onClick={toggleTheme}>
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <AntSwitch
              edge="end"
              checked={theme.palette.mode === "dark"}
              inputProps={{
                "aria-labelledby": "switch-list-label-wifi",
              }}
              sx={{ pointerEvents: "none", ml: 3 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
