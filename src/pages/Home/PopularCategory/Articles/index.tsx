import { styled, Box, Typography } from "@mui/material";
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

const Image = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -2;
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.52, 0.03, 0.25, 1.08);
`;

// const FirstArticle = styled(Box)<{ to?: string }>`
//   position: relative;
//   grid-column: 1/1;
//   grid-row: 1/3;
//   position: relative;
//   background-color: ${({ theme }) =>
//     lighten(theme.palette.background.paper, 0.035)};

//   background-size: cover;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   color: rgba(255, 255, 255, 0.95);
//   overflow: hidden;
//   transition: outline 200ms ease-out;
//   :hover {
//     outline: 1px solid ${({ theme }) => theme.palette.divider};
//   }
//   &:hover > img {
//     transform: scale(1.1);
//   }
// `;

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

const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;
