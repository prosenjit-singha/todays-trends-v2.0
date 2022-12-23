import { Box, Button, styled, Typography } from "@mui/material";
import bg from "../../../../assets/images/hero/hero-5.jpg";

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Alan() {
  return (
    <Box
      sx={{ position: "relative" }}
      component="figure"
      height={300}
      width="100%"
      margin={0}
    >
      <Image src={bg} alt="Alan Background" />
      <Content>
        <Typography textAlign="center" variant="h5">
          Meet Alan
        </Typography>
        <Typography textAlign="center" my={0.5}>
          The most powerful open-source voice recognizer.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Visit Alan
        </Button>
      </Content>
    </Box>
  );
}

export default Alan;
