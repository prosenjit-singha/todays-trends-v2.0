import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";
import { useThemeToggler } from "./context/ThemeToggler";
import { globalStyles } from "./styles/globalStyles";
import AlanProvider from "./context/Alan";
import NewsProvider from "./context/NewsProvider";

function App() {
  const { theme } = useThemeToggler();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles styles={(p) => globalStyles(p)} />
        <NewsProvider>
          <RouterProvider router={router} />
        </NewsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
