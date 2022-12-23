import { Stack, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function FollowIUs() {
  return (
    <Stack sx={{ marginInline: { sm: "auto" } }} direction={{ sm: "row" }}>
      <Typography variant="h5" mr={2}>
        Follow Us
      </Typography>
      <Stack
        spacing={1}
        direction="row"
        sx={{
          transform: "translateX(-1.25%)",
        }}
      >
        <IconButton sx={{ p: 0.5 }}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ p: 0.5 }}>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ p: 0.5 }}>
          <TwitterIcon />
        </IconButton>
        <IconButton sx={{ p: 0.5 }}>
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default FollowIUs;
