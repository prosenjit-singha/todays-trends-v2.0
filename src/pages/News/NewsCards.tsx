import { Grid, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useNewsData } from "../../context/NewsProvider";
import ArticleType from "../../Types/Article.types";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCard.skeleton";

type PropsType = {
  isLoading: boolean;
  articles: ArticleType[];
};

function NewsCards({ articles, isLoading }: PropsType) {
  const [_query, setQuery] = useSearchParams();
  const { setFilter, filter, totalResults = 0 } = useNewsData();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFilter((prev) => ({ ...prev, page: value }));
    setQuery({
      country: filter.country,
      category: filter.category,
      q: filter.keywords,
      page: value.toString(),
    });
  };

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
          defaultPage={filter.page}
          page={filter.page}
          count={totalResults}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{ display: "fex", justifyContent: "center" }}
        />
      </Grid>
    </Grid>
  );
}

export default NewsCards;
