import { styled, Stack, Typography, Chip } from "@mui/material";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

function Article() {
  return (
    <Stack
      className="custom-focus"
      direction="row"
      spacing={2}
      component={Link}
      to=""
      sx={{
        textDecoration: "none",
        color: "initial",
        zIndex: 2,
      }}
    >
      <Image src="https://source.unsplash.com/random/300x300" />
      <Stack sx={{ py: 1, width: "100%" }}>
        <Chip
          style={{ borderRadius: 0 }}
          size="small"
          label="Technology"
          color="primary"
          variant="outlined"
          sx={{ width: "fit-content" }}
        />
        <Title variant="h6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          obcaecati minus iusto!
        </Title>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <SlCalender />
          <Typography>12/05/2022</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Article;

const Image = styled("img")`
  width: clamp(150px, 40%, 250px);
  max-height: 180px;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
  z-index: -2;
`;

const Title = styled(Typography)`
  margin-top: 8px;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mvunn0-MuiButtonBase-root-MuiIconButton-root

// Mui-focusVisible aria-describeedby=":r1:"
