import { Box, Divider, Grid } from "@mui/material";
import { useBreakpoint } from "react-use-size";

export const Section = ({ children }: { children: React.ReactNode }) => (
  <Grid container component="article" sx={{ p: [2, 3] }}>
    {children}
  </Grid>
);

export const Main = ({ children }: { children: React.ReactNode }) => (
  <Grid item xs={12} md={9} lg={10}>
    {children}
  </Grid>
);

export const SideContent = ({ children }: { children: React.ReactNode }) => {
  const isMd = useBreakpoint(900);
  return (
    <Grid
      component="aside"
      item
      xs={12}
      md={3}
      lg={2}
      sx={{ display: "flex", flexDirection: isMd ? "column" : "row" }}
    >
      <Divider
        flexItem
        orientation={isMd ? "horizontal" : "vertical"}
        sx={{ mx: [0, 0, 1], my: 1 }}
      />
      <Box width="100%">
        <Box sx={{ flexBasis: "100%", position: "sticky", top: "70px" }}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

// export default index
