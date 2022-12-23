import HomeIcon from "@mui/icons-material/CottageOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import NewsIcon from "@mui/icons-material/NewspaperOutlined";
import ContactIcon from "@mui/icons-material/ContactMailOutlined";
// import ListIcon from '@mui/icons-material/ListAltOutlined';

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

export default navlinks;
