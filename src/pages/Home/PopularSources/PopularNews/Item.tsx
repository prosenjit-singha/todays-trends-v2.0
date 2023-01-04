import {
  Stack,
  styled,
  Divider,
  lighten,
  darken,
  Typography,
  Link,
} from "@mui/material";
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";
import Article from "../../../../Types/Article.types";

type Props = {
  article: Article;
};

function Item({ article }: Props) {
  return (
    <Stack direction="row" alignItems="center">
      <ImageContainer>
        <Image src={article.urlToImage} alt="News Thumbnail" />
      </ImageContainer>
      <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />
      <Stack width="calc(100% - 60px)">
        <Title href={article.url}>{article.title}</Title>
        <Typography color="text.secondary" fontSize="small">
          {article.source.name}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          color="text.secondary"
        >
          <SlCalender fontSize="small" />
          <Typography fontSize="small">
            {format(new Date(article.publishedAt), "PP")}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Item;

const ImageContainer = styled("figure")`
  margin: 0;
  width: 60px;
  height: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? lighten(theme.palette.background.paper, 0.035)
      : darken(theme.palette.background.paper, 0.1)};
  border-radius: 50%;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Title = styled(Link)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  text-underline-offset: 0.15em;
  :hover {
    text-decoration: underline;
  }
`;
