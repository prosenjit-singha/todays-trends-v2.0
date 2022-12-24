import React from "react";
import { Typography, Divider } from "@mui/material";
import { SideContent, Main, Section } from "../styled";

function LatestNews() {
  return (
    <Section>
      <Main>
        <Typography variant="h4">Latest News</Typography>
        <Divider sx={{ mt: 1 }} />
      </Main>
      <SideContent>World</SideContent>
    </Section>
  );
}

export default LatestNews;
