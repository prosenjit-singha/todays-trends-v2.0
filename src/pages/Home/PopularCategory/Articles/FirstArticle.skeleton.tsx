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

function FirstArticle() {
  return (
    <Container>
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
    </Container>
  );
}

export default FirstArticle;

const Container = styled(Box)`
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
