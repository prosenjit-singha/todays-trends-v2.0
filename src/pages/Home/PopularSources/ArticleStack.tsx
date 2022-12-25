import { Stack, Divider, styled, lighten, darken } from "@mui/material";
import Article from "./Article";

function ArticleStack() {
  return (
    <Stack width="100%">
      <Header>
        <HeaderImage src="https://source.unsplash.com/random/" />
      </Header>
      <Article />
      <Divider sx={{ mt: 1 }} />
      <Article />
      <Divider sx={{ mt: 1 }} />
      <Article />
    </Stack>
  );
}

export default ArticleStack;

const Header = styled("figure")`
  margin: 0;
  width: 100%;
  aspect-ratio: 16 / 6;
  max-height: 200px;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? lighten(theme.palette.background.paper, 0.05)
      : darken(theme.palette.background.paper, 0.05)};
`;

const HeaderImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
