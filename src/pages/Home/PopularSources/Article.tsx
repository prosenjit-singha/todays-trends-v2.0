import { Stack, Box, Typography, styled } from "@mui/material";
import { format } from "date-fns";
import { SlCalender, SlNote } from "react-icons/sl";
import ArticleType from "../../../Types/Article.types";

type Props = {
  data: ArticleType;
};

function Article({ data }: Props) {
  return (
    <Box>
      <Title>{data.title}</Title>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        color="text.secondary"
      >
        <SlNote />
        <Author>{data.author}</Author>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        color="text.secondary"
      >
        <SlCalender />
        <Typography>{format(new Date(data.publishedAt), "PP")}</Typography>
      </Stack>
    </Box>
  );
}

export default Article;

const Title = styled("a")`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 400;
  margin-block: 0.5rem;
  max-height: 53px;
  text-underline-offset: 10%;
  text-decoration: underline 0.05em rgba(0, 0, 0, 0);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;

  /* multiline underline animation */
  /* text-decoration: none;
  background-image: linear-gradient(red, yellow);
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background-position: left bottom; */
  transition: text-decoration-color 200ms ease;
  :hover {
    text-decoration: underline;
  }
`;

const Author = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
