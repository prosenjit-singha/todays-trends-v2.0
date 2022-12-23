import {
  Box,
  Chip,
  lighten,
  darken,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageThumb from "../../../../components/ImageThumb";
import { SlCalender } from "react-icons/sl";
import ArticleType from "../../../../Types/Article.types";
import { format } from "date-fns";

type PropsType = {
  isLoading: boolean;
  category: string;
  data: ArticleType;
};
function FirstArticle({ isLoading, category, data }: PropsType) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Container
      as="a"
      href={data.url}
      target="_blank"
      className="custom-focus"
      sx={{ pointerEvents: isLoading ? "none" : "auto" }}
    >
      {!isLoading && (
        <Image
          onLoad={() => setLoaded(true)}
          src={data.urlToImage}
          alt="News Thumbnail"
        />
      )}
      {!loaded && (
        <ImageThumb
          style={{
            width: "70%",
            height: "70%",
            transform: "translate(8%, 0%)",
          }}
        />
      )}
      {isLoading && (
        <Content sx={{ bgcolor: "transparent" }}>
          <Skeleton
            variant="rectangular"
            width={100}
            height={32}
            sx={{ mb: 1.5 }}
          />
          <Skeleton variant="rectangular" sx={{ mb: 1, fontSize: 20 }} />
          <Skeleton variant="rectangular" sx={{ mb: 1, fontSize: 20 }} />
          <Skeleton
            variant="rectangular"
            width={100}
            sx={{ mb: 1, mt: 0.5, fontSize: 16 }}
          />
        </Content>
      )}
      {!isLoading && (
        <Content>
          <Chip
            color="primary"
            variant="outlined"
            label={category}
            sx={{
              borderRadius: 0,
              width: "fit-content",
              textTransform: "capitalize",
            }}
          />

          <Title variant="h5">{data.title}</Title>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            color="rgba(255,255,255,0.85)"
          >
            <SlCalender />
            <Typography>{format(new Date(data.publishedAt), "PP")}</Typography>
          </Stack>
        </Content>
      )}
    </Container>
  );
}

export default FirstArticle;

const Image = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -2;
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.52, 0.03, 0.25, 1.08);
`;

const Container = styled(Box)<{ href: string; target: string }>`
  position: relative;
  grid-column: 1/1;
  grid-row: 1/3;
  position: relative;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? lighten(theme.palette.background.paper, 0.035)
      : darken(theme.palette.background.paper, 0.05)};

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.95);
  overflow: hidden;
  transition: outline 200ms ease-out;
  :hover {
    outline: 1px solid ${({ theme }) => theme.palette.divider};
  }
  &:hover > img {
    transform: scale(1.1);
  }
`;

const Content = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;
