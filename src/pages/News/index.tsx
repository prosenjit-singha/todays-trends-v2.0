import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import Header from "./Header";

function News() {
  useScrollToTop();
  return (
    <Main sx={{ pt: 2 }}>
      <Header />
    </Main>
  );
}

export default News;
