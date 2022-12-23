import { Stack, IconButton, Typography } from "@mui/material";
import socialLinks from "../../data/socialLinks";

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
        {socialLinks.map(({ id, Icon }) => (
          <IconButton key={id} sx={{ p: 0.5 }}>
            <Icon />
          </IconButton>
        ))}
      </Stack>
    </Stack>
  );
}

export default FollowIUs;
