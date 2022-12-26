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
import ArticleType from "../../Types/Article.types";
import { format } from "date-fns";

type PropsType = {
  data: ArticleType;
};

function NewsCard({ data }: PropsType) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="News Thumbnail"
        height={150}
        image={data.urlToImage}
      />
      <CardContent>
        <Text variant="h5" gutterBottom>
          {data.title}
        </Text>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <NewsIcon />
          <Typography>{data.source.name}</Typography>
        </Stack>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <SlCalender />
          <Typography>{format(new Date(data.publishedAt), "PP")}</Typography>
        </Stack>
        <Text color="text.secondary" mt={2}>
          {data.description}
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
