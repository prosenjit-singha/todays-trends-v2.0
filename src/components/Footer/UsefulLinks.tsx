import { Box, Stack, Typography, styled, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import navlinks from "../../data/navlinks";

const ULink = styled(Link)<{ active?: string | undefined }>`
  position: relative;
  color: ${({ theme, active }) =>
    active ? theme.palette.text.primary : theme.palette.text.secondary};
  text-decoration: none;
  translate: color 300ms ease;
  &::before {
    position: absolute;
    content: "";
    bottom: 8%;
    left: 0;
    width: 100%;
    height: 5%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    /* background-color: red; */
    transform: scale(0);
    transform-origin: left;
    transition: transform 300ms ease-out;
  }
  :hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  :hover::before {
    transform: scale(1);
  }
`;

function UsefulLinks() {
  const { pathname } = useLocation();
  const isActive = (link: string) => (pathname === link ? "active" : undefined);
  return (
    <Box component="nav">
      <Divider sx={{ display: ["block", "none"] }} />
      <Typography variant="h5" mb={1}>
        Useful Links
      </Typography>
      <Stack component="ul" sx={{ listStyle: "none", pl: 0, marginBlock: 0 }}>
        {navlinks.map(({ to, text }, i) => (
          <Box key={i} component="li">
            <ULink to={to} active={isActive(to)}>
              {text}
            </ULink>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default UsefulLinks;
