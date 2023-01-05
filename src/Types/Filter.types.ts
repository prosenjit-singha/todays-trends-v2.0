import { Category } from "../data/categoryList";
import { Country } from "../data/countryList";

export type Filter = {
  country: Country;
  category: Category;
  keywords: string;
  page: number;
};
