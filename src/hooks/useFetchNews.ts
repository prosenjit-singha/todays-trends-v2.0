import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArticleType from "../Types/Article.types";

type CommonPorps = {
  q?: string;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  pageSize?: number;
  page?: number;
};

type Everything = CommonPorps & {
  param?: "everything";
  country?: never;
  category?: never;
};

type TopHeadlines = CommonPorps & {
  param?: "top-headlines";
  country?: string;
  category?: string;
};

type PropsType = Everything | TopHeadlines;

const useFetchNews = (props: PropsType) => {
  const {
    q,
    sortBy,
    param = "top-headlines",
    pageSize = 12,
    page = 1,
    category,
    country,
  } = props;

  let baseURL = `https://newsapi.org/v2/${param}?apiKey=${process.env.REACT_APP_NEWS_API}`;

  let url = "";

  if (q) url += `&q=${q.split(" ").join("+")}`;
  if (country) url += `&country=${country}`;
  if (category) url += `&category=${category}`;
  if (pageSize) url += `&pageSize=${pageSize}`;
  if (page) url += `&page=${page}`;
  // eslint-disable-next-line
  if (sortBy) url += `&url=${sortBy}`;

  // consoles
  console.info(url);

  return useQuery({
    queryKey: ["top-headings"],
    queryFn: (): Promise<ArticleType[]> =>
      axios
        .get("news.json")
        .then(async ({ data }) => {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          return data.articles;
        })
        .catch((err) => console.error(err)),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // staleTime: Infinity,
  });
};

export default useFetchNews;
