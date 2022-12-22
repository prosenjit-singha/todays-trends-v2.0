import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";

function News() {
  useScrollToTop();
  return <Main>News</Main>;
}

export default News;
