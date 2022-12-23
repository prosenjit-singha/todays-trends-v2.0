import { Box, Divider, Stack } from "@mui/material";
import { useBreakpoint } from "react-use-size";
import Alan from "./Alan";
import StayConnected from "./StayConnected";

function SideContent() {
  const isMd = useBreakpoint(900);
  return (
    <Stack direction={isMd ? "column" : "row"}>
      <Divider
        flexItem
        orientation={isMd ? "horizontal" : "vertical"}
        sx={{ mx: [0, 0, 1], my: 1 }}
      />
      <Box sx={{ flexBasis: "100%" }}>
        <Alan />
        <StayConnected />
      </Box>
    </Stack>
  );
}

export default SideContent;
