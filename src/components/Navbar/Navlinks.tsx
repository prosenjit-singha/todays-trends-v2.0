import { styled, Stack, Box, Theme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

type NavLinkPropsType = {
  theme: Theme;
  active?: string | undefined;
};

const NavLink = styled(Link)<{ active?: string | undefined }>(
  ({ theme, active }) => ({
    cursor: "pointer",
    textDecoration: "none",
    color: active ? theme.palette.text.primary : theme.palette.text.secondary,
    ":visited": {
      color: theme.palette.text.secondary,
    },
    ":hover": {
      color: theme.palette.text.primary,
    },
  })
);

function Navlinks() {
  const { pathname } = useLocation();

  function isActive(link: string) {
    return pathname === link ? "active" : undefined;
  }
  return (
    <Box
      component="nav"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Stack
        component="ul"
        direction="row"
        spacing={2}
        sx={{ listStyle: "none", pl: 0, mr: 1.5 }}
      >
        <li>
          {" "}
          <NavLink active={isActive("/")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink active={isActive("/news")} to="/news">
            News
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink active={isActive("/about")} to="/about">
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink active={isActive("/contact-us")} to="/contact-us">
            Contact Us
          </NavLink>
        </li>
      </Stack>
    </Box>
  );
}

export default Navlinks;
