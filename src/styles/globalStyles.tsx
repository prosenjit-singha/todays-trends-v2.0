import { css, Theme, keyframes } from "@mui/material";

const enterAnimation = keyframes`
  0%{
    transform: scale(0,0);
  }
  100%{
    transform: scale(0.7,1);
  }
`;

const focusKeyframes = keyframes`
  0%, 100%{
    transform: scaleX(0.7);
  }
  50%{
    transform: scaleX(0.8);
  }
`;

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow: overlay;
  }
  .swiper-pagination-bullet {
    background-color: ${theme.palette.primary.main};
  }
  .custom-focus {
    position: relative;
    outline: none;
    z-index: 5;
    ::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10em;
      background-color: ${theme.palette.primary.main + "32"};
      transform: scale(0, 0);
      z-index: -1;
    }
    &:focus-visible::before {
      animation: ${enterAnimation} 250ms ease forwards,
        ${focusKeyframes} 2.5s ease infinite 250ms;
    }
  }
`;
