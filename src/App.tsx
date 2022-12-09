import {
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { darkMode } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkMode}>
        <CssBaseline enableColorScheme />
        <Container>
          <Paper variant="elevation">
            <Typography variant="h2" color="">
              {" "}
              Hello
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
