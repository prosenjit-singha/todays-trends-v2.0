import { Grid, styled, Typography, Stack } from "@mui/material";
import reading from "../../assets/images/reading-newspaper.jpg";
import { style } from "./const";

function BottomSection() {
  return (
    <Grid container sx={{ my: 5, px: style.inlinePadding }} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Image src={reading} alt="Reading Newspaper" />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Stack justifyContent="center" height="100%" p={2} maxWidth={500}>
          <Typography variant="h4" gutterBottom>
            Reliable Sources
          </Typography>
          <Typography variant="h6">
            {" "}
            We bring you the best news from the best sources. We prioritize the
            accuracy more than the quantity of the news. In order to make this
            happen, we bring you the news from the most reliable sources,
            sources that you can trust.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default BottomSection;
const Image = styled("img")`
  width: 100%;
  height: clamp(200px, 100%, 480px);
  object-fit: cover;
  object-position: center;
`;
