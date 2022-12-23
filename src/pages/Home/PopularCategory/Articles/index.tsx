import {
  styled,
  Box,
  css,
  lighten,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import Article from "./Article";
import ImageThumb from "../../../../components/ImageThumb";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";

function Articles() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Container>
      <FirstArticle>
        {!loaded && (
          <ImageThumb
            style={{
              width: "70%",
              height: "70%",
              transform: "translate(8%, 0%)",
            }}
          />
        )}
        <Image
          onLoad={() => setLoaded(true)}
          src="https://source.unsplash.com/random/300x300"
        />
        <Content>
          <Chip
            color="primary"
            variant="outlined"
            label="Tech"
            sx={{ borderRadius: 0, width: "fit-content" }}
          />
          <Title variant="h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, autem.
          </Title>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            color="text.secondary"
          >
            <SlCalender />
            <Typography>12.5.2022</Typography>
          </Stack>
        </Content>
      </FirstArticle>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Article key={i} />
      ))}
    </Container>
  );
}

export default Articles;

const Container = styled("section")(({ theme }) => ({
  marginTop: 16,
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "1fr",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));

const FirstArticle = styled(Box)`
  position: relative;
  grid-column: 1/1;
  grid-row: 1/3;
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  background-color: ${({ theme }) =>
    lighten(theme.palette.background.paper, 0.035)};

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
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
