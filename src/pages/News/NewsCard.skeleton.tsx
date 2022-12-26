import { Skeleton, Stack, Card, CardActions, CardContent } from "@mui/material";

function NewsCardSkeleton() {
  return (
    <Card>
      <Skeleton height={150} />
      <CardContent>
        <Skeleton height={24} sx={{ mb: 1 }} />
        <Skeleton height={24} sx={{ mb: 2 }} />
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
          mb={1}
        >
          <Skeleton variant="circular" height={15} width={15} />
          <Skeleton height={15} width="40%" />
        </Stack>
        <Stack
          color="text.secondary"
          direction="row"
          spacing={1}
          alignItems="center"
          mb={1.5}
        >
          <Skeleton variant="circular" height={15} width={15} />
          <Skeleton height={15} width="40%" />
        </Stack>

        <Skeleton height={18} sx={{ mb: 1 }} />
        <Skeleton height={18} sx={{ mb: 1.5 }} />

        <CardActions sx={{ px: 0, pb: 0 }}>
          <Skeleton width={80} height={30} />
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default NewsCardSkeleton;
