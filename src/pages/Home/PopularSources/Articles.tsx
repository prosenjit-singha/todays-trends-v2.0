import { Grid, styled } from "@mui/material";
import ArticleStack from "./ArticleStack";
import ArticleStackSkeleton from "./ArticleStack.skeleton";
function Articles() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <ArticleStack />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ArticleStack />
      </Grid>
      <Grid item xs={12} lg={4}>
        {/* <ArticleStack /> */}
        <ArticleStackSkeleton />
      </Grid>
    </Grid>
  );
}

export default Articles;

const Container = styled("div")`
  display: grid;
`;
