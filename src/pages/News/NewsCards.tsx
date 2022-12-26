import { Grid } from "@mui/material";
import ArticleType from "../../Types/Article.types";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCard.skeleton";

type PropsType = {
  articles: ArticleType[];
};

function NewsCards({ articles }: PropsType) {
  return (
    <Grid container columnSpacing={2} rowSpacing={3} sx={{ px: [2, 3] }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <NewsCardSkeleton />
      </Grid>
      {articles.map((article, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <NewsCard data={article} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NewsCards;
