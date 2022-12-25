import {
  Stack,
  styled,
  Divider,
  lighten,
  darken,
  Typography,
} from "@mui/material";
import { SlCalender } from "react-icons/sl";

function Item() {
  return (
    <Stack direction="row" alignItems="center">
      <ImageContainer></ImageContainer>
      <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />
      <Stack width="calc(100% - 60px)">
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          ipsa porro minus ea laborum ullam recusandae tempore itaque animi
          numquam.
        </Typography>
        <Typography color="text.secondary" fontSize="small">
          Source
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          color="text.secondary"
        >
          <SlCalender fontSize="small" />
          <Typography fontSize="small">Dec 29, 2022</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Item;

const ImageContainer = styled("figure")`
  margin: 0;
  width: 60px;
  height: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? lighten(theme.palette.background.paper, 0.035)
      : darken(theme.palette.background.paper, 0.1)};
  border-radius: 50%;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
