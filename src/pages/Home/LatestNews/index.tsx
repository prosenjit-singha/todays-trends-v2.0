import React from "react";
import { Typography, Divider } from "@mui/material";
import { SideContent, Main, Section } from "../styled";
import Articles from "./Articles";
import Subscribe from "./Subscribe";
import HotCategories from "./HotCategories";

function LatestNews() {
  return (
    <Section>
      <Main>
        <Typography variant="h4">Latest News</Typography>
        <Divider sx={{ my: 1 }} />
        <Articles />
      </Main>
      <SideContent>
        <Subscribe />
        <HotCategories />
      </SideContent>
    </Section>
  );
}

export default LatestNews;
