import { Box, Stack, Typography, Divider } from "@mui/material";
import useFetchNews from "../../../../hooks/useFetchNews";
import Item from "./Item";
import ItemSkeleton from "./Item.skeleton";

function PopularNews() {
  const { data, isLoading } = useFetchNews({});
  const articles = data?.articles || [];
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Popular News
      </Typography>
      <Stack>
        {isLoading &&
          [1, 2, 3, 4].map((i) => (
            <Box key={i}>
              <ItemSkeleton />
              {i < 4 && <Divider sx={{ my: 1 }} />}
            </Box>
          ))}
        {articles.slice(0, 4).map((article, i) => (
          <Box key={i}>
            <Item article={article} />
            {i < 4 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default PopularNews;
