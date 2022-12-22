import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeTogglerProvider } from "./context/ThemeToggler";
// styles
import "swiper/css";
import "swiper/css/pagination";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeTogglerProvider>
      <App />
    </ThemeTogglerProvider>
  </React.StrictMode>
);
