import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";

function PopularCategoryHeading() {
  const [category, setCategory] = useState("technology");
  function handleChange(event: React.MouseEvent<HTMLElement>, value: string) {
    if (value !== null) setCategory(value);
  }
  // console.info(category);
  return (
    <Stack direction="row" spacing={1}>
      <Typography variant="h4" mr="auto">
        Most Popular Category
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={category}
        onChange={handleChange}
        exclusive
        aria-label="Most Popular Category Toggler"
      >
        {popularCategories.map((category, i) => (
          <ToggleButton key={i} value={category.value}>
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
}

export default PopularCategoryHeading;

const popularCategories = [
  {
    name: "Technology",
    value: "technology",
  },
  {
    name: "Business",
    value: "business",
  },
  {
    name: "Science",
    value: "science",
  },
  {
    name: "Health",
    value: "health",
  },
];
