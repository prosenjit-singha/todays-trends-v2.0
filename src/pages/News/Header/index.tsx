import { Paper } from "@mui/material";
import Dropdown from "./Dropdown";
import countryList from "../../../data/countryList";

function Header() {
  return (
    <Paper elevation={3} sx={{ mx: [2, 3], mb: 2, px: 2, py: 1 }}>
      <Dropdown data={countryList} />
    </Paper>
  );
}

export default Header;
