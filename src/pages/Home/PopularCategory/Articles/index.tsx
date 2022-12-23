import { styled, Box, css } from "@mui/material";
import Article from "./Article";

function Articles() {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Article key={i} />
      ))}
    </Container>
  );
}

export default Articles;

const Container = styled("section")(({ theme }) => ({
  marginTop: 16,
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "1fr",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));
