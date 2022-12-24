import { Divider } from "@mui/material";
import React, { useState } from "react";
import { Main, Section, SideContent } from "../styled";
import Alan from "./Alan";
import Articles from "./Articles";
import PopularCategoryHeading from "./PopularCategoryHeading";
import StayConnected from "./StayConnected";

function PopularCategory() {
  const [category, setCategory] = useState("technology");
  function onCategoryChange(
    _event: React.MouseEvent<HTMLElement>,
    value: string
  ) {
    if (value !== null) setCategory(value);
  }
  return (
    <Section>
      <Main>
        <PopularCategoryHeading
          category={category}
          onChange={onCategoryChange}
        />
        <Divider sx={{ mt: 1 }} />
        <Articles category={category} />
      </Main>
      <SideContent>
        <Alan />
        <StayConnected />
      </SideContent>
    </Section>
  );
}

export default PopularCategory;
