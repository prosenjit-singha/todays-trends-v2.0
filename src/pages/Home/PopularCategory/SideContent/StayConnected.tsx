import {
  Button,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import socialLinks from "../../../../data/socialLinks";

function StayConnected() {
  return (
    <Box mt={5}>
      <Typography variant="h5">Stay Connected</Typography>
      <List>
        {socialLinks.map(({ id, Icon, followers, bg }) => (
          <ListItem key={id} disablePadding sx={{ mt: 0.5 }}>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "fit-content" }}>
                <Icon size="1.5rem" />
              </ListItemIcon>
              <Divider flexItem orientation="vertical" sx={{ mx: 1 }} />
              <ListItemText primary={`${followers}K Followers`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default StayConnected;
