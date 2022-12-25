import { Typography, Divider } from "@mui/material";
import { Main, Section, SideContent } from "../styled";
import Articles from "./Articles";
import PopularNews from "./PopularNews";

function PopularSources() {
  return (
    <Section>
      <Main>
        <Typography variant="h4">Most Popular Sources</Typography>
        <Divider sx={{ my: 1 }} />
        <Articles />
      </Main>
      <SideContent>
        <PopularNews />
      </SideContent>
    </Section>
  );
}

export default PopularSources;
