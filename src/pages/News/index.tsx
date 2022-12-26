import { Main } from "../../components/styled/containers";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import Header from "./Header";
import NewsCards from "./NewsCards";

function News() {
  useScrollToTop();
  return (
    <Main>
      <Header />
      <NewsCards />
    </Main>
  );
}

export default News;
