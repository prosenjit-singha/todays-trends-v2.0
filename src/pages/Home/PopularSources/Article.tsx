import { Stack, Box, Typography, styled } from "@mui/material";
import { SlCalender, SlNote } from "react-icons/sl";
function Article() {
  return (
    <Box>
      <Title>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe odio qui
        cumque recusandae dolorem? Cupiditate nesciunt distinctio facilis
        suscipit soluta.
      </Title>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        color="text.secondary"
      >
        <SlNote />
        <Typography>Prosenjit Singha</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        color="text.secondary"
      >
        <SlCalender />
        <Typography>Dec 29, 2022</Typography>
      </Stack>
    </Box>
  );
}

export default Article;

const Title = styled("h2")`
  font-size: 1.1rem;
  font-weight: 400;
  margin-block: 0.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
