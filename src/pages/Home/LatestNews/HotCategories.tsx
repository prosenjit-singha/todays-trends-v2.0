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
          <ListItem key={i} disablePadding sx={{ my: 1 }}>
            <ItemButton
              className="custom-focus"
              as={Link}
              to={category.path}
              bg_image={category.bgImageURL}
            >
              <ListItemText sx={{ color: "rgba(255,255,255,0.87)" }}>
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
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${({ bg_image }) => bg_image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: filter 300ms ease-out;
  :hover {
    filter: brightness(1.35);
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
