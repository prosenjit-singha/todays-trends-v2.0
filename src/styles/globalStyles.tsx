import { css, Theme } from "@mui/material";

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  .swiper-pagination-bullet {
    background-color: ${theme.palette.primary.main};
  }
`;
