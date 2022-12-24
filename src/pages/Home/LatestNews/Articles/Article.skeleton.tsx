import { Skeleton } from "@mui/material";
import { Container, Content, ImageContainer } from "./Article";

function ArticleSkeleton() {
  return (
    <Container>
      <ImageContainer>
        <Skeleton height="100%" width="100%" />
      </ImageContainer>
      <Content sx={{ py: 1 }}>
        <Skeleton width={90} height={32} sx={{ mb: 1.7 }} />
        <Skeleton height={26} width="100%" sx={{ mb: 1 }} />
        <Skeleton height={26} width="100%" sx={{ mb: 1 }} />
        <Skeleton height={26} width="100%" sx={{ mb: 1 }} />
        <Skeleton height={20} width="70%" />
      </Content>
    </Container>
  );
}

export default ArticleSkeleton;
