import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import Articles from "./Articles";
import PopularCategoryHeading from "./PopularCategoryHeading";
import SideContent from "./SideContent";

function PopularCategory() {
  const [category, setCategory] = useState("technology");
  function onCategoryChange(
    _event: React.MouseEvent<HTMLElement>,
    value: string
  ) {
    if (value !== null) setCategory(value);
  }
  return (
    <Grid container component="article" sx={{ p: [2, 3] }}>
      <Grid item xs={12} md={9} lg={10}>
        <PopularCategoryHeading
          category={category}
          onChange={onCategoryChange}
        />
        <Divider sx={{ mt: 1 }} />
        <Articles category={category} />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <SideContent />
      </Grid>
    </Grid>
  );
}

export default PopularCategory;
