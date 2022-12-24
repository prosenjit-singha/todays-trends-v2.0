import { Box, lighten, darken, Skeleton, styled } from "@mui/material";

function FirstArticleSkeleton() {
  return (
    <Container>
      <Content sx={{ bgcolor: "transparent" }}>
        <Skeleton
          variant="rectangular"
          width={100}
          height={32}
          sx={{ mb: 1.5 }}
        />
        <Skeleton variant="rectangular" sx={{ mb: 1, fontSize: 20 }} />
        <Skeleton variant="rectangular" sx={{ mb: 1, fontSize: 20 }} />
        <Skeleton
          variant="rectangular"
          width={100}
          sx={{ mb: 1, mt: 0.5, fontSize: 16 }}
        />
      </Content>
    </Container>
  );
}

export default FirstArticleSkeleton;

const Container = styled(Box)`
  position: relative;
  grid-column: 1/1;
  grid-row: 1/3;
  position: relative;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? lighten(theme.palette.background.paper, 0.035)
      : darken(theme.palette.background.paper, 0.05)};

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.95);
  overflow: hidden;
  transition: outline 200ms ease-out;
`;

const Content = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
