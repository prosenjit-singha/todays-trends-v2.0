import { styled, Box, css, lighten } from "@mui/material";
import Article from "./Article";
import ImageThumb from "../../../../components/ImageThumb";
import { useState } from "react";

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
