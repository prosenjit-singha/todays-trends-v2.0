import { createContext, useContext, useState } from "react";
import { Category } from "../../data/categoryList";
import { Country } from "../../data/countryList";
import Article from "../../Types/Article.types";

type Filter = {
  country: Country;
  category: Category;
  keywords: string;
};
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
  });

  const value = {
    articles,
    filter,
    setFilter,
    setArticles,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export default NewsProvider;

export const useNewsData = () => useContext(NewsContext);
