import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  minHeight: "10vh",
  backgroundColor: "#6D9886",
}));

function Footer() {
  return <Container>Footer</Container>;
}

export default Footer;
