import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkMode } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkMode}>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
