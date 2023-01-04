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

const fadeKeyframes = keyframes`
  0%,100% {
    opacity: 0;
  }
  50% {
    opacity:0.5;
  }
`;

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: clamp(8px, 2vw, 12px);
    background-color: transparent;
  }
  ::-webkit-scrollbar:hover {
    background-color: ${theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.25)"
      : "rgba(0,0,0,0.25)"};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.25)"
      : "rgba(0,0,0,0.25)"};
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow: overlay;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
  .swiper-pagination-bullet {
    background-color: ${theme.palette.primary.main};
  }
  .custom-focus {
    position: relative;
    outline: 1px solid transparent;
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
  .animate-fade {
    animation: ${fadeKeyframes} 3s infinite ease;
  }
`;
