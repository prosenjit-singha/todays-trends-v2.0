import { Grid, styled } from "@mui/material";
import Article from "./Article";
import ArticleSkeleton from "./Article.skeleton";

function Articles() {
  return (
    <Container container>
      {[1, 2, 3].map((i) => (
        <ArticleSkeleton key={i} />
      ))}
      <Article />
    </Container>
  );
}

export default Articles;

const Container = styled(Grid)`
  margin-top: 1rem;
  gap: 1rem;
  &:hover a:not(:hover) {
    filter: grayscale(0.75);
  }
`;
