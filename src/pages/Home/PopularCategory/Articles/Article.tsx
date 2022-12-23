import React from "react";
import { styled, Stack, Typography, Chip, lighten } from "@mui/material";
import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";
import ArticleType from "../../../../Types/Article.types";

function Article({ category, data }: { category: string; data: ArticleType }) {
  return (
    <Container as="a" href={data.url} target="_blank" className="custom-focus">
      <ImageContainer>
        <Image src={data.urlToImage} alt="News Thumbnail" />
      </ImageContainer>
      <Stack sx={{ py: 1, width: "100%" }}>
        <Chip
          style={{ borderRadius: 0 }}
          size="small"
          label={category}
          color="primary"
          variant="outlined"
          sx={{ width: "fit-content", textTransform: "capitalize" }}
        />
        <Title variant="h6">{data.title}</Title>

        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <SlCalender />
          <Typography>{format(new Date(data.publishedAt), "PP")}</Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Article;

const ImageContainer = styled("figure")`
  width: clamp(150px, 100%, 280px);
  max-height: 180px;
  aspect-ratio: 16/9;
  z-index: -2;
  margin: 0;
  overflow: hidden;
  background-color: ${({ theme }) =>
    lighten(theme.palette.background.paper, 0.035)};
`;
const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 500ms cubic-bezier(0.52, 0.03, 0.25, 1.08);
`;

const Title = styled(Typography)`
  margin-top: 8px;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Container = styled(Stack)<{ href: string; target: string }>`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: initial;
  z-index: 2;
  transition: background-color 200ms ease-out, outline 200ms ease-out;
  :hover {
    outline: 1px solid ${({ theme }) => theme.palette.divider};
    background-color: ${({ theme }) =>
      lighten(theme.palette.background.paper, 0.035)};
  }
  :hover img {
    transform: scale(1.1);
  }
`;
