import { Box } from "@mui/material";
import Alan from "./Alan";
import StayConnected from "./StayConnected";

function SideContent() {
  return (
    <Box sx={{ paddingInline: [2, 3] }}>
      <Alan />
      <StayConnected />
    </Box>
  );
}

export default SideContent;
