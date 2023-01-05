import { createContext, useContext, useState } from "react";
import { Category } from "../../data/categoryList";
import { Country } from "../../data/countryList";
import useFetchNews from "../../hooks/useFetchNews";
import Article from "../../Types/Article.types";
import { Filter } from "../../Types/Filter.types";

type Value = {
  articles: Article[];
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};

const NewsContext = createContext<Value>({} as Value);

function NewsProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
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

  const value = {
    articles,
    filter,
    setFilter,
    setArticles,
  };

  // consoles
  // console.info(filter);

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export default NewsProvider;

export const useNewsData = () => useContext(NewsContext);
