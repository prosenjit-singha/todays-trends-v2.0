import { css, Theme } from "@mui/material";

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }
  .swiper-pagination-bullet {
    background-color: ${theme.palette.primary.main};
  }
`;
