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
import countryList from "../../../data/countryList";
import categoryList from "../../../data/categoryList";

type PropsType = {
  isLoading: boolean;
};

function Header({ isLoading }: PropsType) {
  return (
    <Paper elevation={3} sx={{ mt: 2, mx: [2, 3], p: 2, mb: 3 }}>
      <Grid
        container
        component={"form"}
        rowSpacing={[2, 0]}
        columnSpacing={[0, 2]}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Dropdown
            isLoading={isLoading}
            label="Country"
            defalutValue=""
            data={countryList}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Dropdown
            isLoading={isLoading}
            label="Category"
            defalutValue=""
            data={categoryList}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={6} sx={{ display: "flex" }}>
          <TextField
            disabled={isLoading}
            fullWidth
            size="small"
            placeholder="Search News"
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
