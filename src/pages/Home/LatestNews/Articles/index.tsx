import { Grid, styled } from "@mui/material";
import useFetchNews from "../../../../hooks/useFetchNews";
import Article from "./Article";
import ArticleSkeleton from "./Article.skeleton";

function Articles() {
  const { data: articles = [], isLoading } = useFetchNews({});
  return (
    <Container container>
      {isLoading && [1, 2, 3].map((i) => <ArticleSkeleton key={i} />)}
      {!isLoading &&
        articles.length &&
        articles
          .slice(0, 3)
          .map((article, i) => <Article key={i} data={article} />)}
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
