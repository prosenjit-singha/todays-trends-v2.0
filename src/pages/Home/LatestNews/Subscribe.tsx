import {
  Box,
  Paper,
  styled,
  lighten,
  darken,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function Subscribe() {
  return (
    <Container elevation={0}>
      <Typography variant="h6" textAlign="center">
        Subscribe To Our Newsletter
      </Typography>
      <Typography textAlign="center" fontSize={14} color="text.secondary">
        No spam, notification only about latest news & updates.
      </Typography>
      <Input placeholder="Email" />
      <Button variant="contained" fullWidth>
        Subscribe
      </Button>
    </Container>
  );
}

export default Subscribe;

const Container = styled(Paper)`
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? lighten(theme.palette.background.paper, 0.075)
      : darken(theme.palette.background.paper, 0.075)};
`;

const Input = styled("input")`
  margin-block: 0.5rem;
  border: 1px solid gray;
  font-size: 1.1rem;
  width: 100%;
  border-radius: 0;
  padding: 8px 4px;
  :focus-visible {
    outline: none;
    border: 1px solid ${(p) => p.theme.palette.primary.main};
  }
`;
