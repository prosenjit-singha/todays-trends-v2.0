import { styled, Button } from "@mui/material";
import { Main } from "../../components/styled/containers";
import pageNotFound from "../../assets/images/page-not-found-animated.svg";
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Image = styled("img")`
  height: clamp(250px, 50vh, 500px);
`;

function PageNotFound() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  useScrollToTop();

  return (
    <Main
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={pageNotFound} alt="Page Not Found" />
      <Button variant="outlined" sx={{ mt: 3 }} onClick={handleBack}>
        Go Back
      </Button>
    </Main>
  );
}

export default PageNotFound;
