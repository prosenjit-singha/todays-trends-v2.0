import { Grid, Paper, Typography, styled, Box } from "@mui/material";
import client from "../../assets/icons/client.png";
import network from "../../assets/icons/network.png";
import growth from "../../assets/icons/growth.png";
import community from "../../assets/icons/community.png";

function Cards() {
  return (
    <Box mx={[2, 3]} maxWidth={780} sx={{ mx: "auto", px: [2, 3] }}>
      <Grid container spacing={2}>
        {cards.map((card, i) => (
          <Grid key={i} item xs={12} sm={6}>
            <Paper
              sx={{
                height: "100%",
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image src={card.imgPath} />
              <Typography variant="h5" textAlign="center">
                {card.title}
              </Typography>
              <Typography color="text.secondary" textAlign="center">
                {card.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Cards;

const Image = styled("img")`
  width: clamp(150px, 30%, 300px);
  margin-inline: auto;
  /* max-height: 200px; */
`;

const cards = [
  {
    imgPath: client,
    title: "WE WORK FOR THE BEST OF THE COMMUNITY",
    text: "We want people belong to our community get the best experience on reading a newspaper.",
  },
  {
    imgPath: growth,
    title: "WE HELP GIVING AWAY KNOWLEDGE",
    text: "We want people to gain knowledge through our app, and use the knowledge in their life.",
  },
  {
    imgPath: network,
    title: "WE WORK FOR ACCURACY",
    text: "We want people to get the accurate news everyday in order to follow the trends.",
  },
  {
    imgPath: community,
    title: "WE PROVIDE A BETTER USER INTERFACE",
    text: "Our app has the better interface than other newspaper, and our app is easy to use.",
  },
];
