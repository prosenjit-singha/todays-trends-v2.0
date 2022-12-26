import {
  Stack,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button,
  styled,
} from "@mui/material";
import { SlCalender } from "react-icons/sl";
import { BsNewspaper as NewsIcon } from "react-icons/bs";

function NewsCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="News Thumbnail"
        height={150}
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Text variant="h5" gutterBottom>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Text>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <NewsIcon />
          <Typography>Source</Typography>
        </Stack>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <SlCalender />
          <Typography>Dec 29, 2022</Typography>
        </Stack>
        <Text color="text.secondary" mt={2}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Text>

        <CardActions sx={{ px: 0, pb: 0 }}>
          <Button size="small">Read More </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default NewsCard;

const Text = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;
