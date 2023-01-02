import { Main } from "../../components/styled/containers";
import BottomSection from "./BottomSection";
import Header from "./Header";
import { Stack, Typography } from "@mui/material";
import Cards from "./Cards";
import { style } from "./const";

function About() {
  return (
    <Main>
      <Header />
      <Stack px={style.inlinePadding} mx="auto" my={5}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          The Today's Trends Advantages
        </Typography>
        <Typography textAlign="center" gutterBottom>
          Today's Trends can introduce you with the current trend whenever you
          want, you can be in a restaurant, or in your office room, tired.
        </Typography>
        <Typography textAlign="center" gutterBottom>
          The interesting part about Today's Trends is that you can use your
          voice in order to know the latest news on anything as we have the
          Voice Recognition feature as well as the analog line by line reading.
        </Typography>
        <Typography textAlign="center" gutterBottom>
          You can get news from any place, even from any source. We provide you
          with the authentic news from reliable sources. Also, you can check the
          accuracy of any news as we have the feature of rating any article.
        </Typography>
      </Stack>
      <Cards />
      <BottomSection />
    </Main>
  );
}

export default About;
