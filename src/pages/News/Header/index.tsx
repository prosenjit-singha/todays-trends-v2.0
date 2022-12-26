import {
  Grid,
  TextField,
  IconButton,
  CircularProgress,
  lighten,
  darken,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { BiSearch } from "react-icons/bi";
import Dropdown from "./Dropdown";
import countryList from "../../../data/countryList";
import categoryList from "../../../data/categoryList";

function Header() {
  return (
    <Grid
      container
      component={"form"}
      rowSpacing={[2, 0]}
      columnSpacing={[0, 2]}
      sx={({ palette, shadows }) => ({
        mx: [2, 3],
        mb: 2,
        p: 2,
        boxSizing: "border-box",
        maxWidth: "96%",
        boxShadow: shadows[2],
        bgcolor: lighten(palette.background.paper, 0.035),
      })}
    >
      <Grid xs={12} sm={4} md={3}>
        <Dropdown label="Country" defalutValue="" data={countryList} />
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Dropdown label="Category" defalutValue="" data={categoryList} />
      </Grid>
      <Grid item xs={12} sm={4} md={6} sx={{ display: "flex" }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search News"
          InputProps={{
            sx: { pr: 0 },
            endAdornment: (
              <IconButton sx={{ display: ["none", "flex", "none"] }}>
                <BiSearch />
                {/* <CircularProgress size={20} /> */}
              </IconButton>
            ),
          }}
        />
        <LoadingButton
          variant="contained"
          loadingPosition="end"
          endIcon={<BiSearch />}
          sx={{ display: ["flex", "none", "flex"] }}
        >
          Search
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

export default Header;
