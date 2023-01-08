import HomeIcon from "@mui/icons-material/CottageOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import NewsIcon from "@mui/icons-material/NewspaperOutlined";
import ContactIcon from "@mui/icons-material/ContactMailOutlined";

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
    to: "/command-list",
    text: "Command List",
  },
  {
    Icon: InfoIcon,
    to: "/about",
    text: "About",
  },
];

export default navlinks;
