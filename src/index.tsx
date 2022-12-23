import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeTogglerProvider } from "./context/ThemeToggler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// styles
import "swiper/css";
import "swiper/css/pagination";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeTogglerProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeTogglerProvider>
  </React.StrictMode>
);
