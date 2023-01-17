import { Grid } from "@mui/material";
import useFetchNews from "../../../hooks/useFetchNews";
import ArticleStack from "./ArticleStack";
import ArticleStackSkeleton from "./ArticleStack.skeleton";
function Articles() {
  const { data: data1, isLoading: isSource1Loading } = useFetchNews({
    param: "top-headlines",
    sources: "abc-news",
  });
  const { data: data2, isLoading: isSource2Loading } = useFetchNews({
    param: "top-headlines",
    sources: "bbc-news",
  });
  const { data: data3, isLoading: isSource3Loading } = useFetchNews({
    param: "top-headlines",
    sources: "cbc-news",
  });
  const source1News = data1?.articles || [];
  const source2News = data2?.articles || [];
  const source3News = data3?.articles || [];
  // console.info("source 1", source1News);
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
