import { Stack, styled, Divider } from "@mui/material";

function Item() {
  return (
    <Stack direction="row" alignItems="center">
      <ImageContainer></ImageContainer>
      <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />
      Item
    </Stack>
  );
}

export default Item;

const ImageContainer = styled("figure")`
  margin: 0;
  width: 60px;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: gray;
  border-radius: 50%;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
