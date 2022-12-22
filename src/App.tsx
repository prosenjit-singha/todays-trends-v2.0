import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeToggler } from "./context/ThemeToggler";

function App() {
  const { theme } = useThemeToggler();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
