import { Box, Stack, Typography, Divider } from "@mui/material";
import Item from "./Item";
import ItemSkeleton from "./Item.skeleton";

function PopularNews() {
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Popular News
      </Typography>
      <Stack>
        <ItemSkeleton />
        {[1, 2, 3, 4].map((i) => (
          <>
            <Item key={i} />
            <Divider sx={{ my: 1 }} />
          </>
        ))}
      </Stack>
    </Box>
  );
}

export default PopularNews;
