import { Stack, Divider, styled, lighten, darken } from "@mui/material";
import ArticleType from "../../../Types/Article.types";
import Article from "./Article";

type Props = {
  articles: ArticleType[];
};

function ArticleStack({ articles }: Props) {
  return (
    <Stack width="100%">
      <Header>
        <HeaderImage
          src={articles[0].urlToImage || "https://source.unsplash.com/random/"}
        />
      </Header>
      <Article data={articles[0]} />
      <Divider sx={{ mt: 1 }} />
      <Article data={articles[1]} />
      <Divider sx={{ mt: 1 }} />
      <Article data={articles[2]} />
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
