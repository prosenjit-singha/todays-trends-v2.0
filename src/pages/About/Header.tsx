import { Box, styled, Stack, Typography, colors } from "@mui/material";
import heroBg from "../../assets/images/hero/hero-9.jpg";
import { style } from "./const";

function Header() {
  return (
    <Container>
      <Stack maxWidth={600}>
        <Typography
          color={colors.grey[100]}
          component="h1"
          fontSize="clamp(1.5rem, 5vw, 2.5rem)"
          gutterBottom
          fontWeight="bold"
        >
          What You Will Get from Today's Trends
        </Typography>
        <Typography
          color={colors.grey[200]}
          component="p"
          fontSize="clamp(1rem, 4vw, 1.75rem)"
          maxWidth={550}
        >
          Today's Trends provides you with the most up-to-date news so that you
          can follow the trends everyday.
        </Typography>
      </Stack>
    </Container>
  );
}

export default Header;

const Container = styled(Box)`
  max-width: 1232px;
  padding-block: 2rem;
  padding-inline: ${style.inlinePadding};
  height: clamp(280px, fit-content, 500px);
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.1)"
      : "rgba(0,0,0,0.1)"};
  display: flex;
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  align-items: center;
  margin-inline: auto;
`;
