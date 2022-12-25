import {
  styled,
  Grid,
  Box,
  Stack,
  Typography,
  Chip,
  lighten,
  darken,
} from "@mui/material";
import { format } from "date-fns";
import { BsPen } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import ArticleType from "../../../../Types/Article.types";

type PropsType = {
  data: ArticleType;
};

function Article({ data }: PropsType) {
  return (
    <Container
      className="custom-focus"
      as="a"
      href={data.url}
      target="_black"
      xs={12}
    >
      <ImageContainer>
        <Image src={data.urlToImage} alt="News Thumbnail" />
      </ImageContainer>
      <Content>
        <Chip
          label={data.source.name}
          sx={{ width: "fit-content", borderRadius: 0 }}
        />
        <Title variant="h6">{data.title}</Title>
        <Stack direction="row" spacing={2} color="text.secondary">
          {/* Author */}
          <Stack direction="row" spacing={1} alignItems="center">
            <BsPen />{" "}
            <Typography
              sx={{
                display: "-webkit-box",
                "-webkit-line-clamp": "1",
                "-webkit-box-orient": "vertical",
                textOverflow: "ellipsis",
                overflow: "hidden",
                textTransform: "capitalize",
              }}
            >
              {data.author || data.source.name || "Unknown"}
            </Typography>
          </Stack>
          {/* Date */}
          <Stack direction="row" spacing={1} alignItems="center">
            <SlCalender />
            <Typography>{format(new Date(data.publishedAt), "PP")}</Typography>
          </Stack>
        </Stack>
      </Content>
    </Container>
  );
}

export default Article;

export const ImageContainer = styled("figure")`
  width: clamp(100px, 100%, 320px);
  height: 100%;
  max-height: 240px;
  overflow: hidden;
  margin: 0;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.01);
  transition: transform 500ms cubic-bezier(0.52, 0.03, 0.25, 1.08);
`;

export const Content = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: 0.75rem;
`;

export const Container = styled(Grid)<{ href?: string; target?: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  transition: filter 500ms ease-out;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  transition: outline 300ms ease-out, background-color 300ms ease-out;
  :hover {
    outline: 1px solid ${({ theme }) => theme.palette.divider};
    background-color: ${({ theme }) =>
      theme.palette.mode === "dark"
        ? lighten(theme.palette.background.paper, 0.03)
        : darken(theme.palette.background.paper, 0.035)};
  }
  :hover img {
    transform: scale(1.1);
  }
`;

const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;
