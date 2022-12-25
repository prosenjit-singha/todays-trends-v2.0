import { Stack, Skeleton, Divider, styled } from "@mui/material";

function ItemSkeleton() {
  return (
    <Stack direction="row" alignItems="center">
      <Skeleton
        variant="circular"
        sx={{ width: "62px", aspectRatio: "1", height: "100%" }}
      />
      <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />
      <Content>
        <Skeleton width="50%" height={16} sx={{ mb: 1, maxWidth: "100px" }} />
        <Skeleton width="100%" height={18} sx={{ mb: 0.5 }} />
        <Skeleton width="100%" height={18} sx={{ mb: 1 }} />
        <Skeleton width="50%" height={12} sx={{ maxWidth: "150px" }} />
      </Content>
    </Stack>
  );
}

export default ItemSkeleton;

const Content = styled(Stack)`
  /* border-left: 1px solid ${({ theme }) => theme.palette.divider}; */
  width: calc(100% - 60px);
  /* padding-left: 8px;
  margin-left: 8px; */
`;
