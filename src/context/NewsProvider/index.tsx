import { createContext, useContext, useState } from "react";
import useFetchNews from "../../hooks/useFetchNews";
import Article from "../../Types/Article.types";
import { Filter } from "../../Types/Filter.types";

type Value = {
  articles: Article[];
  activeArticle: number | null;
  status: string;
  totalResults: number;
  filter: Filter;
  isLoading: boolean;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  setActiveArticle: React.Dispatch<React.SetStateAction<number | null>>;
};

const NewsContext = createContext<Value>({} as Value);

function NewsProvider({ children }: { children: React.ReactNode }) {
  const [activeArticle, setActiveArticle] = useState<null | number>(null);
  const [filter, setFilter] = useState<Filter>({
    country: "",
    category: "",
    keywords: "",
    page: 1,
  });

  const { data, isLoading } = useFetchNews({
    param: "top-headlines",
    category: filter.category,
    country: filter.country,
    q: filter.keywords,
    page: filter.page,
  });
  const articles = data?.articles || [];
  const totalResults = data?.totalResults || 0;
  const status = data?.status || "";
  const value = {
    articles,
    status,
    totalResults,
    activeArticle,
    filter,
    isLoading,
    setFilter,
    setActiveArticle,
  };

  // <=========| CONSOLES |==========>
  //  *
  // console.info("Latest Filter Data: ", filter);

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export default NewsProvider;

export const useNewsData = () => useContext(NewsContext);
