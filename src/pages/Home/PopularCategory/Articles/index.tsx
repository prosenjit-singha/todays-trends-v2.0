import { styled } from "@mui/material";
import Article from "./Article";
import useFetchNews from "../../../../hooks/useFetchNews";
import ArticleSkeleton from "./Article.skeleton";
import FirstArticle from "./FirstArticle";
import FirstArticleSkeleton from "./FirstArticle.skeleton";

function Articles({ category }: { category: string }) {
  const { data: articles = [], isLoading } = useFetchNews({
    param: "everything",
    q: "bitcoin",
    pageSize: 12,
    category,
  });
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
