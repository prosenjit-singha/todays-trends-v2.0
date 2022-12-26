import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";

function NewsCards() {
  return (
    <Grid container spacing={2} sx={{ px: [2, 3] }}>
      <Grid item xs={12} sm={6} md={4}>
        <NewsCard />
      </Grid>
    </Grid>
  );
}

export default NewsCards;
