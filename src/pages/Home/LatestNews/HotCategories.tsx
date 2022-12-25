import {
  styled,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

function HotCategories() {
  return (
    <Stack sx={{ mt: 5 }}>
      <Typography variant="h5">Hot Categories</Typography>
      <List>
        {hotCategories.map((category, i) => (
          <ListItem
            key={i}
            disablePadding
            sx={{ my: 1, background: `url(${category.bgImageURL})` }}
          >
            <ItemButton
              className="custom-focus"
              as={Link}
              to={category.path}
              bg_image={category.bgImageURL}
            >
              <ListItemText sx={{ color: "rgba(255,255,255,0.95)" }}>
                {category.name}
              </ListItemText>
            </ItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default HotCategories;

const ItemButton = styled(ListItem)<{ bg_image: string; to: string }>`
  width: 100%;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75) 25%,
    rgba(0, 0, 0, 0)
  );
  background-size: 200%;
  background-position: 50%;
  transition: background-position 300ms ease-out;
  &:hover {
    background-position: left;
  }
`;

const hotCategories = [
  {
    name: "Technology",
    value: "technology",
    bgImageURL: "https://source.unsplash.com/random/380×200/?technology",
    path: "/news",
  },
  {
    name: "Business",
    value: "business",
    bgImageURL: "https://source.unsplash.com/random/380×200/?business",
    path: "/news",
  },
  {
    name: "Science",
    value: "science",
    bgImageURL: "https://source.unsplash.com/random/380×200/?science",
    path: "/news",
  },
  {
    name: "Health",
    value: "health",
    bgImageURL: "https://source.unsplash.com/random/380×200/?health",
    path: "/news",
  },
];
