import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Article from "../Types/Article.types";
import newsFallBackData from "../data/newsFallBack.json";

type SuccessRes = {
  status: string;
  totalResults: 38;
  articles: Article[];
};

type ErrorRes = {
  status: string;
  code: string;
  message: string;
};

type CommonProps = {
  q?: string;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  pageSize?: number;
  page?: number;
};

type ResHandler = {
  onSuccess: () => void;
  onError: () => void;
};

type Everything = CommonProps & {
  param?: "everything";
  country?: never;
  category?: never;
  sources?: never;
};

type TopHeadlines = CommonProps & {
  param?: "top-headlines";
  country?: string;
  category?: string;
  sources?: string;
};

export type FetchNews = Everything | TopHeadlines;
// type FetchNews = {
//   q?: string;
//   sortBy?: "relevancy" | "popularity" | "publishedAt";
//   pageSize?: number;
//   page?: number;
//   param?: "everything" | "top-headlines";
//   country?: string;
//   category?: string;
// };

const useFetchNews = (props: FetchNews, resHandler?: ResHandler) => {
  const {
    q,
    sortBy,
    param = "top-headlines",
    // param = "everything",
    pageSize = 12,
    page = 1,
    category,
    country,
    sources,
  } = props;

  let baseURL = `https://newsapi.org/v2/${param}?apiKey=${process.env.REACT_APP_NEWS_API}`;

  let url = "";

  if (q) url += `&q=${q.split(" ").join("+")}`;
  if (country) url += `&country=${country}`;
  if (category) url += `&category=${category}`;
  if (pageSize) url += `&pageSize=${pageSize}`;
  if (sources) url += `&sources=${sources}`;
  if (page) url += `&page=${page}`;
  // eslint-disable-next-line
  if (sortBy) url += `&url=${sortBy}`;

  // consoles
  // console.info("country", country);
  // console.info(baseURL + url);

  return useQuery<SuccessRes, SuccessRes>({
    queryKey: ["top-headings", url],
    queryFn: () =>
      axios
        .get(baseURL + url)
        .then((res) => res.data)
        .catch((err) => {
          console.warn(
            "NewsAPI daily limit reached! the results are fallback data."
          );
          return newsFallBackData;
        }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onSuccess: resHandler?.onSuccess,
    // onError: resHandler?.onError,
    retry: false,

    // staleTime: Infinity,
    // initialData: {},
    // select: (res) => res
    // onSuccess: (res) => console.info(res),
    // onError: (err) => console.warn(err),
  });
};

export default useFetchNews;
