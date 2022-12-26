// import React from "react";
import {
  Stack,
  Grid,
  styled,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  lighten,
  darken,
} from "@mui/material";
import sub from "../../assets/images/subscribe-2.png";

function SubscribeSection() {
  return (
    <Grid
      container
      spacing={4}
      sx={({ palette }) => ({
        py: 4,
        px: [2, 3],
        mt: 2,
        bgcolor:
          palette.mode === "dark"
            ? lighten(palette.background.paper, 0.035)
            : darken(palette.background.paper, 0.1),
      })}
    >
      <Grid item xs={12} sm={4} md={5}>
        <Image src={sub} alt="Subscribe" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          fontSize="clamp(1.5rem, 4vw, 2.5rem)"
          textTransform="capitalize"
          variant="h3"
          maxWidth="500px"
        >
          Get the best blog stories into your inbox!
        </Typography>
        <Stack component="form" direction="row" spacing={2} my={2}>
          <FormControl size="medium" fullWidth sx={{ maxWidth: "300px" }}>
            <OutlinedInput
              placeholder="Enter your email"
              type="email"
              required
            />
          </FormControl>
          <Button variant="contained" size="large">
            Subscribe
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SubscribeSection;

const Image = styled("img")`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  object-position: center;
`;
