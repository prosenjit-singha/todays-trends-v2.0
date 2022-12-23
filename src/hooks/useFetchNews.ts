import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArticleType from "../Types/Article.types";

type PropsType = {
  q?: string;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  param?: string;
  pageSize?: number;
  page?: number;
  country?: string;
  category?: string;
};

const useFetchNews = ({
  q,
  sortBy,
  param,
  pageSize,
  page,
  category,
  country,
}: PropsType) => {
  let url = `https://newsapi.org/v2/${param}?apiKey=testkey`;

  if (q) url += `&q=${q}`;
  if (country) url += `&country=${country}`;
  if (category) url += `&category=${category}`;
  if (pageSize) url += `&pageSize=${pageSize}`;
  if (page) url += `&page=${page}`;
  // eslint-disable-next-line
  if (sortBy) url += `&url=${sortBy}`;

  return useQuery({
    queryKey: ["top-headings"],
    queryFn: (): Promise<ArticleType[]> =>
      axios
        .get("news.json")
        .then(({ data }) => data.articles)
        .catch((err) => console.error(err)),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // staleTime: Infinity,
  });
};

export default useFetchNews;
