import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";

function LogoSection() {
  return (
    <>
      <Logo sx={{ marginInline: "auto", mb: 2 }} />
      <Typography
        sx={{
          textAlign: { sm: "center" },
        }}
      >
        Today's Trends was built for people follow everydays trends. To make it
        more interesting, the voice assistant was added as some of us get bored
        easily when reading anything. Sot Today's Trends is for everywant who
        want to know what's happening around the world.
      </Typography>
    </>
  );
}

export default LogoSection;
