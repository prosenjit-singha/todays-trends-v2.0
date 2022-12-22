import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";
import { useThemeToggler } from "./context/ThemeToggler";
import { globalStyles } from "./styles/globalStyles";

function App() {
  const { theme } = useThemeToggler();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles styles={(p) => globalStyles(p)} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
