import { Stack, Divider } from "@mui/material";
import Article from "./Article";

function ArticleStack() {
  return (
    <Stack>
      <Article />
      <Divider sx={{ mt: 1 }} />
      <Article />
      <Divider sx={{ mt: 1 }} />
      <Article />
    </Stack>
  );
}

export default ArticleStack;
