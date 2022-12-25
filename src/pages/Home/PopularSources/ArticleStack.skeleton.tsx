import { Stack, Skeleton, Divider } from "@mui/material";

function ArticleStackSkeleton() {
  return (
    <Stack width="100%">
      <Skeleton
        sx={{ width: "100%", aspectRatio: "16 / 9", height: "135px", mb: 1 }}
      />
      <ArticleSkeleton />
      <Divider sx={{ my: 2 }} />
      <ArticleSkeleton />
      <Divider sx={{ my: 2 }} />
      <ArticleSkeleton />
    </Stack>
  );
}

export default ArticleStackSkeleton;

const ArticleSkeleton = () => (
  <>
    <Skeleton height={20} />
    <Skeleton height={20} sx={{ mt: 1 }} />
    <Skeleton width="50%" height={16} sx={{ mt: 1.5 }} />
    <Skeleton width="50%" height={16} sx={{ mt: 0.5 }} />
  </>
);
