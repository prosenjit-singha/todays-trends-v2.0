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
        <Author>Prosenjit Singha</Author>
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

const Title = styled("a")`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 400;
  margin-block: 0.5rem;
  max-height: 53px;
  text-underline-offset: 10%;
  text-decoration: underline 0.05em rgba(0, 0, 0, 0);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;

  /* multiline underline animation */
  /* text-decoration: none;
  background-image: linear-gradient(red, yellow);
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background-position: left bottom; */
  transition: text-decoration-color 200ms ease;
  :hover {
    text-decoration: underline;
  }
`;

const Author = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;
