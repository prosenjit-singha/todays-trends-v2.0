import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Article from "../Types/Article.types";

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
};

type TopHeadlines = CommonProps & {
  param?: "top-headlines";
  country?: string;
  category?: string;
};

type PropsType = Everything | TopHeadlines;

const useFetchNews = (props: PropsType, resHandler?: ResHandler) => {
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
  // console.info(url);

  return useQuery<SuccessRes, ErrorRes>({
    queryKey: ["top-headings", url],
    queryFn: () => axios.get(baseURL + url).then((res) => res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onSuccess: resHandler?.onSuccess,
    onError: resHandler?.onError,
    // staleTime: Infinity,
    // initialData: {},
    // select: (res) => res
    // onSuccess: (res) => console.info(res),
    // onError: (err) => console.error(err),
  });
};

export default useFetchNews;
