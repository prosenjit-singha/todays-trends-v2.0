import {
  styled,
  Stack,
  Typography,
  Chip,
  LinkProps,
  lighten,
} from "@mui/material";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import React from "react";

function Article() {
  return (
    <Container as={Link} to="/news" className="custom-focus">
      <ImageContainer>
        <Image src="https://source.unsplash.com/random/300x300" />
      </ImageContainer>
      <Stack sx={{ py: 1, width: "100%" }}>
        <Chip
          style={{ borderRadius: 0 }}
          size="small"
          label="Technology"
          color="primary"
          variant="outlined"
          sx={{ width: "fit-content" }}
        />
        <Title variant="h6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          obcaecati minus iusto!
        </Title>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <SlCalender />
          <Typography>12/05/2022</Typography>
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

const Container = styled(Stack)<{ to?: string }>`
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
