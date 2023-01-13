import { styled, Box } from "@mui/material";
import Article from "./Article";
import useFetchNews from "../../../../hooks/useFetchNews";
import ArticleSkeleton from "./Article.skeleton";
import FirstArticle from "./FirstArticle";
import FirstArticleSkeleton from "./FirstArticle.skeleton";

function Articles({ category }: { category: string }) {
  const { data, isLoading } = useFetchNews({
    param: "top-headlines",
    category,
    pageSize: 5,
  });
  const articles = data?.articles || [];
  return (
    <Container>
      {isLoading && <FirstArticleSkeleton />}
      {isLoading &&
        [1, 2, 3, 4].map((i) => <ArticleSkeleton key={i} delay={i} />)}

      {!isLoading && articles.length && (
        <FirstArticle data={articles[0]} category={category} />
      )}
      {!isLoading &&
        articles
          .slice(1, 5)
          .map((article, i) => (
            <Article key={i} category={category} data={article} />
          ))}
    </Container>
  );
}

export default Articles;

const Container = styled(Box)`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 1rem;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }
  a {
    transition: filter 500ms ease-out;
  }
  :hover a:not(:hover) {
    filter: grayscale(0.75);
  }
`;
