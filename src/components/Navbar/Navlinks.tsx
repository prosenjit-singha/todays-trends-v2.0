import { styled, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavLink = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  ":visited": {
    color: "initial",
  },
  ":hover": {
    color: theme.palette.text.primary,
  },
}));

function Navlinks() {
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </Stack>
    </Box>
  );
}

export default Navlinks;
