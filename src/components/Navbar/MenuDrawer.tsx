import {
  styled,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/CottageOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import NewsIcon from "@mui/icons-material/NewspaperOutlined";
import ContactIcon from "@mui/icons-material/ContactMailOutlined";
import ArrowRight from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
// import ListIcon from '@mui/icons-material/ListAltOutlined';

type PropsType = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function MenuDrawer({ open, onClose, onOpen }: PropsType) {
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
    </SwipeableDrawer>
  );
}

export default MenuDrawer;

// const ListItemButton = styled(LIB)`
//   padding-left: 2rem;
//   padding-right: 3rem;
// `;

// const ListItemIcon = styled(LII)`
//   min-width: 40px;
// `;

const navlinks = [
  {
    Icon: HomeIcon,
    to: "/",
    text: "Home",
  },
  {
    Icon: NewsIcon,
    to: "/news",
    text: "News",
  },
  {
    Icon: ContactIcon,
    to: "/contact-us",
    text: "Contact Us",
  },
  {
    Icon: InfoIcon,
    to: "/about",
    text: "About",
  },
];
