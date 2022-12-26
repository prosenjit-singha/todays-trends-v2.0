import { Main } from "../../components/styled/containers";
import useFetchNews from "../../hooks/useFetchNews";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import Header from "./Header";
import NewsCards from "./NewsCards";

function News() {
  useScrollToTop();
  const { data = [], isLoading } = useFetchNews({});
  return (
    <Main>
      <Header />
      <NewsCards articles={data} />
    </Main>
  );
}

export default News;
