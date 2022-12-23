import { Stack, Skeleton, styled } from "@mui/material";

function ArticleSkeleton({ delay }: { delay: number }) {
  return (
    <Stack direction="row" spacing={2}>
      {/* Image Thumb */}
      <MySkeleton
        delay={delay}
        variant="rectangular"
        width="clamp(150px, 100%, 280px)"
        height="100%"
        sx={{
          maxHeight: "180px",
        }}
      />
      {/* Content Section */}
      <Stack width="100%">
        {/* Category Chip */}
        <MySkeleton
          delay={delay}
          variant="rectangular"
          width={100}
          height={22}
          sx={{ my: 1.25 }}
        />
        {/* News Headline */}
        <MySkeleton
          delay={delay}
          variant="rectangular"
          sx={{ fontSize: "1.4rem", mb: 0.75 }}
        />
        <MySkeleton
          delay={delay}
          variant="rectangular"
          sx={{ fontSize: "1.4rem", mb: 0.75 }}
        />
        <MySkeleton
          delay={delay}
          variant="rectangular"
          sx={{ fontSize: "1.4rem", mb: 0.75 }}
        />
        {/* News Description */}
        <MySkeleton
          delay={delay}
          variant="rectangular"
          width={130}
          sx={{ mt: 0.5 }}
        />
      </Stack>
    </Stack>
  );
}

export default ArticleSkeleton;

const MySkeleton = styled(Skeleton)<{ delay?: number }>`
  animation-delay: ${({ delay }) => (delay ? `${delay * 0.05}s` : "0.5s")};
`;
