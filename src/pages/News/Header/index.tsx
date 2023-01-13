import { useEffect, useRef } from "react";
import {
  Grid,
  TextField,
  IconButton,
  CircularProgress,
  Paper,
  Button,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import Dropdown from "./Dropdown";
import countryList, { Country } from "../../../data/countryList";
import categoryList, { Category } from "../../../data/categoryList";
import { useNewsData } from "../../../context/NewsProvider";
import { useSearchParams } from "react-router-dom";

type PropsType = {
  isLoading: boolean;
};

function Header({ isLoading }: PropsType) {
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const {
    filter: { country, category, keywords, page },
    setFilter,
  } = useNewsData();
  const [query, setQuery] = useSearchParams();
  const tempFilter = useRef<{
    country: Country;
    category: Category;
  }>({ country, category });

  function changeCountry(value: string) {
    tempFilter.current = { ...tempFilter.current, country: value as Country };
  }
  function changeCategory(value: string) {
    tempFilter.current = { ...tempFilter.current, category: value as Category };
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let keywords = "";
    const temp = tempFilter.current;

    if (searchFieldRef.current?.value) {
      keywords = searchFieldRef.current.value;
    }
    setFilter({
      country: temp.country,
      category: temp.category,
      keywords,
      page,
    });

    if (!keywords && !temp.category && !temp.category) setQuery({});
    else
      setQuery({
        country: temp.country,
        category: temp.category,
        q: keywords,
      });
  }

  useEffect(() => {
    const country = query.get("country");
    const category = query.get("category");
    const q = query.get("q");
    const page = query.get("page");

    setFilter({
      country: (country as Country) || "",
      category: (category as Category) || "",
      keywords: q || "",
      page: parseInt(page || "1"),
    });
  }, []);

  return (
    <Paper elevation={3} sx={{ mt: 2, mx: [2, 3], p: 2, mb: 3 }}>
      <Grid
        container
        component={"form"}
        onSubmit={handleSubmit}
        rowSpacing={[2, 0]}
        columnSpacing={[0, 2]}
      >
        {/* Country */}
        <Grid item xs={12} sm={4} md={3}>
          <Dropdown
            isLoading={isLoading}
            name="country"
            label="Country"
            defaultValue={query.get("country") || ""}
            data={countryList}
            setValue={changeCountry}
          />
        </Grid>

        {/* Category */}
        <Grid item xs={12} sm={4} md={3}>
          <Dropdown
            isLoading={isLoading}
            name="category"
            label="Category"
            defaultValue={query.get("category") || ""}
            data={categoryList}
            setValue={changeCategory}
          />
        </Grid>

        {/* Search Field */}
        <Grid item xs={12} sm={4} md={6} sx={{ display: "flex" }}>
          <TextField
            inputRef={searchFieldRef}
            disabled={isLoading}
            fullWidth
            size="small"
            placeholder="Search News"
            defaultValue={keywords.split("+").join(" ")}
            InputProps={{
              sx: { pr: 0 },
              endAdornment: (
                <IconButton
                  disabled={isLoading}
                  type="submit"
                  sx={{ display: ["none", "flex", "none"] }}
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    <BiSearch />
                  )}
                </IconButton>
              ),
            }}
          />
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            endIcon={
              isLoading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                <BiSearch />
              )
            }
            sx={{ display: ["flex", "none", "flex"] }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
