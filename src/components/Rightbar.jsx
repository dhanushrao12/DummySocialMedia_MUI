import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width="300">
        <Typography variant="h6" fontWeight={400} mt={2} mb={2}>
          Online
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-2048x1448.png"
          />
          <Avatar
            alt="Travis Howard"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-1-2048x1448.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-2-2048x1448.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-3-2048x1448.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-4-2048x1448.png"
          />
          <Avatar
            alt="Anders Hejlsberg"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-5-2048x1448.png"
          />
          <Avatar
            alt="Ken Thompson"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-6-2048x1448.png"
          />
          <Avatar
            alt="Guido van Rossum"
            src="https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-7-2048x1448.png"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={400}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 370, height: 200 }} cols={3} rowHeight={50}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={400} mt={2} mb={2}>
          Recent Chats
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
];
export default Rightbar;
