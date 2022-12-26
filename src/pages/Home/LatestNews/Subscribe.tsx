import {
  Paper,
  styled,
  lighten,
  darken,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
} from "@mui/material";

function Subscribe() {
  return (
    <Container as="form" elevation={0}>
      <Typography variant="h6" textAlign="center">
        Subscribe To Our Newsletter
      </Typography>
      <Typography
        my={1}
        textAlign="center"
        fontSize={14}
        color="text.secondary"
      >
        No spam, notification only about latest news & updates.
      </Typography>
      <FormControl size="small" fullWidth>
        <OutlinedInput type="email" placeholder="Email" required />
      </FormControl>
      <Button sx={{ mt: 1 }} type="submit" variant="contained" fullWidth>
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
