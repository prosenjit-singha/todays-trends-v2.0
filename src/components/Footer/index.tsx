import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "10vh",
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: 24,
  paddingBottom: 8,
}));

function Footer() {
  return <Container>Footer</Container>;
}

export default Footer;
