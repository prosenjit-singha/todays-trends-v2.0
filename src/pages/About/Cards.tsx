import { Grid, Typography, styled, Box } from "@mui/material";
import client from "../../assets/icons/client.png";
import network from "../../assets/icons/network.png";
import growth from "../../assets/icons/growth.png";
import community from "../../assets/icons/community.png";
import { style } from "./const";

function Cards() {
  return (
    <Box px={style.inlinePadding} sx={{ mx: "auto" }}>
      <Grid container spacing={3}>
        {cards.map((card, i) => (
          <Grid key={i} item xs={12} sm={6}>
            <Box
              sx={({ palette }) => ({
                height: "100%",
                p: 2,
                display: "flex",
                flexDirection: "column",
                outline: `1px solid ${palette.divider}`,
              })}
            >
              <Image src={card.imgPath} />
              <Typography variant="h5" textAlign="center">
                {card.title}
              </Typography>
              <Typography color="text.secondary" textAlign="center">
                {card.text}
              </Typography>
            </Box>
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
