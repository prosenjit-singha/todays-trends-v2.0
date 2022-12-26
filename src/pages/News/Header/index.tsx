import {
  Grid,
  TextField,
  IconButton,
  CircularProgress,
  lighten,
  Paper,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { BiSearch } from "react-icons/bi";
import Dropdown from "./Dropdown";
import countryList from "../../../data/countryList";
import categoryList from "../../../data/categoryList";

function Header() {
  return (
    <Paper elevation={3} sx={{ mt: "80px", mx: [2, 3], p: 2, mb: 3 }}>
      <Grid
        container
        component={"form"}
        rowSpacing={[2, 0]}
        columnSpacing={[0, 2]}
      >
        <Grid item xs={12} sm={4} md={3}>
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
    </Paper>
  );
}

export default Header;
