import { Grid, Pagination } from "@mui/material";
import ArticleType from "../../Types/Article.types";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCard.skeleton";

type PropsType = {
  isLoading: boolean;
  articles: ArticleType[];
};

function NewsCards({ articles, isLoading }: PropsType) {
  return (
    <Grid container columnSpacing={2} rowSpacing={3} sx={{ px: [2, 3] }}>
      {isLoading &&
        [...Array(12)].map((_, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <NewsCardSkeleton />
          </Grid>
        ))}
      {articles.map((article, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <NewsCard data={article} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Pagination
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{ display: "fex", justifyContent: "center" }}
          count={10}
        />
      </Grid>
    </Grid>
  );
}

export default NewsCards;
