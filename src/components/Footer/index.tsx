import { Grid, styled, Typography, Divider } from "@mui/material";
import LogoSection from "./LogoSection";
import UsefulLinks from "./UsefulLinks";

const Container = styled(Grid)(({ theme }) => ({
  minHeight: "10vh",
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: 24,
  paddingBottom: 8,
}));

function Footer() {
  return (
    <Container container spacing={2}>
      <Grid
        item
        xs={12}
        sm={9}
        md={10}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <LogoSection />
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <UsefulLinks />
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <Typography fontSize="small" textAlign="center">
          Copyright © Today's Trends 2022.{" "}
        </Typography>
      </Grid>
    </Container>
  );
}

export default Footer;
