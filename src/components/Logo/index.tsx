import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(Link)(({ theme }) => ({
  fontSize: 30,
  fontWeight: 600,
  textDecoration: "none",
  ":visited": {
    color: theme.palette.primary.main,
  },
}));

type PropsType = Omit<React.ComponentProps<typeof Container>, "to">;

function Logo(props: PropsType) {
  return (
    <Container {...props} to="/" color="primary">
      Today's Trends
    </Container>
  );
}

export default Logo;
