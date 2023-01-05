import { createContext, useContext, useState } from "react";
import { Category } from "../../data/categoryList";
import { Country } from "../../data/countryList";
import Article from "../../Types/Article.types";

type Value = {
  articles: Article[];
  country: Country;
  category: Category;
  keywords: string;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  setCountry: React.Dispatch<React.SetStateAction<Country>>;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
};

const initialValues: Omit<
  Value,
  "setArticles" | "setCategory" | "setKeywords" | "setCountry"
> = {
  articles: [],
  country: "",
  category: "",
  keywords: "",
};

const NewsContext = createContext<Value>({ ...initialValues } as Value);

function NewsProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [country, setCountry] = useState<Country>("");
  const [category, setCategory] = useState<Category>("");
  const [keywords, setKeywords] = useState("");

  const value = {
    articles,
    country,
    category,
    keywords,
    setCategory,
    setCountry,
    setArticles,
    setKeywords,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export default NewsProvider;

export const useNewsData = () => useContext(NewsContext);
