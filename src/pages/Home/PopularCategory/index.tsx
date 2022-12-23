import { Divider, Grid } from "@mui/material";
import React from "react";
import Articles from "./Articles";
import PopularCategoryHeading from "./PopularCategoryHeading";
import SideContent from "./SideContent";

function PopularCategory() {
  return (
    <Grid container component="article" sx={{ p: [2, 3] }}>
      <Grid item xs={12} md={9} lg={10}>
        <PopularCategoryHeading />
        <Divider sx={{ mt: 1 }} />
        <Articles />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <SideContent />
      </Grid>
    </Grid>
  );
}

export default PopularCategory;
