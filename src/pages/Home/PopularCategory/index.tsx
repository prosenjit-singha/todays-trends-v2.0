import { Divider, Grid } from "@mui/material";
import React from "react";
import PopularCategoryHeading from "./PopularCategoryHeading";

function PopularCategory() {
  return (
    <Grid container component="article" sx={{ p: [2, 3] }}>
      <Grid item xs={12}>
        <PopularCategoryHeading />
        <Divider sx={{ mt: 1 }} />
      </Grid>
    </Grid>
  );
}

export default PopularCategory;
