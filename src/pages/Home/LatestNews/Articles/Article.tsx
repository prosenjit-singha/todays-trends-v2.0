import { styled, Grid, Box, Stack, Typography, Chip } from "@mui/material";
import { BsPen } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

function Article() {
  return (
    <Container as="a" xs={12}>
      <ImageContainer>
        <Image
          src="https://source.unsplash.com/random/300×300"
          alt="News Thumbnail"
        />
      </ImageContainer>
      <Content>
        <Chip label="BBC News" sx={{ width: "fit-content", borderRadius: 0 }} />
        <Title variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          adipisci?
        </Title>
        <Stack direction="row" spacing={2} color="text.secondary">
          {/* Author */}
          <Stack direction="row" spacing={1} alignItems="center">
            <BsPen /> <Typography>PJ</Typography>
          </Stack>
          {/* Date */}
          <Stack direction="row" spacing={1} alignItems="center">
            <SlCalender />
            <Typography>29 Dec, 2022</Typography>
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
  max-height: 180px;
  overflow: hidden;
  margin: 0;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Content = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: filter 500ms ease-out;
`;

const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;
