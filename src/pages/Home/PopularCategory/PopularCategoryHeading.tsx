import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

type PropsType = {
  category: string;
  onChange: (event: React.MouseEvent<HTMLElement>, value: string) => void;
};

function PopularCategoryHeading({ category, onChange }: PropsType) {
  return (
    <Stack direction="row" flexWrap="wrap">
      <Typography variant="h4" mr="auto" sx={{ mb: { xs: 2, md: 0 } }}>
        Most Popular Category
      </Typography>
      <ToggleButtonGroup
        sx={{ width: { xs: "100%", sm: "auto" } }}
        color="primary"
        value={category}
        onChange={onChange}
        exclusive
        aria-label="Most Popular Category Toggler"
      >
        {popularCategories.map((category, i) => (
          <ToggleButton
            key={i}
            value={category.value}
            sx={{ flexBasis: ["100%", "100%", "fit-content"] }}
          >
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
