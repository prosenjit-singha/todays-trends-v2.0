import { Divider, Grid } from "@mui/material";
import React from "react";
import PopularCategoryHeading from "./PopularCategoryHeading";
import SideContent from "./SideContent";

function PopularCategory() {
  return (
    <Grid container component="article" sx={{ p: [2, 3] }}>
      <Grid item xs={12} md={9}>
        <PopularCategoryHeading />
        <Divider sx={{ mt: 1 }} />
      </Grid>
      <Grid item xs={12} md={3}>
        <SideContent />
      </Grid>
    </Grid>
  );
}

export default PopularCategory;
