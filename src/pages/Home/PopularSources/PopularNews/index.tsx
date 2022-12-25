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
        {/* {[1, 2, 3, 4, 5].map((i) => (
          <Box key={i}>
            <ItemSkeleton />
            {i<4 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))} */}
        {[1, 2, 3, 4].map((i) => (
          <Box key={i}>
            <Item />
            {i < 4 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default PopularNews;
