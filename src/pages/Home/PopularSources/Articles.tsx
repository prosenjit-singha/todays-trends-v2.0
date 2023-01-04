import { Grid } from "@mui/material";
import useFetchNews from "../../../hooks/useFetchNews";
import ArticleStack from "./ArticleStack";
import ArticleStackSkeleton from "./ArticleStack.skeleton";
function Articles() {
  const { data: source1News = [], isLoading: isSource1Loading } = useFetchNews(
    {}
  );
  const { data: source2News = [], isLoading: isSource2Loading } = useFetchNews(
    {}
  );
  const { data: source3News = [], isLoading: isSource3Loading } = useFetchNews(
    {}
  );
  return (
    <Grid container spacing={3}>
      {/* Source 1 stack */}
      <Grid item xs={12} sm={6} lg={4}>
        {isSource1Loading ? (
          <ArticleStackSkeleton />
        ) : source1News.length ? (
          <ArticleStack articles={source1News} />
        ) : null}
      </Grid>
      {/* Source 2 stack */}
      <Grid item xs={12} sm={6} lg={4}>
        {isSource2Loading ? (
          <ArticleStackSkeleton />
        ) : source1News.length ? (
          <ArticleStack articles={source2News} />
        ) : null}
      </Grid>
      {/* Source 3 stack */}
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          display: {
            sm: "none",
            lg: "flex",
          },
        }}
      >
        {isSource3Loading ? (
          <ArticleStackSkeleton />
        ) : source1News.length ? (
          <ArticleStack articles={source3News} />
        ) : null}
      </Grid>
    </Grid>
  );
}

export default Articles;
