import { styled, Stack, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import navlinks from "../../data/navlinks";

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
        {navlinks.map(({ to, text }, i) => (
          <li key={i}>
            {" "}
            <NavLink active={isActive(to)} to={to}>
              {text}
            </NavLink>
          </li>
        ))}
      </Stack>
    </Box>
  );
}

export default Navlinks;
