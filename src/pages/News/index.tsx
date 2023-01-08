import { Main } from "../../components/styled/containers";
import { useNewsData } from "../../context/NewsProvider";
import useFetchNews from "../../hooks/useFetchNews";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import Header from "./Header";
import NewsCards from "./NewsCards";

function News() {
  useScrollToTop();
  const { articles, isLoading } = useNewsData();
  return (
    <Main>
      <Header isLoading={isLoading} />
      <NewsCards isLoading={isLoading} articles={articles} />
    </Main>
  );
}

export default News;
