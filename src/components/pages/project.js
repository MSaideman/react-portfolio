import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import EventListener from "../assets/eventlistener.png";
import TechBlog from "../assets/tech blog.png";

export default function Project() {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={EventListener}
          alt="event finding app"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Event Listener App
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A simple event app to find and host events using our own server-side
            API that stores users and events.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href="https://github.com/MSaideman/Event-Listener-App"
            underline="none"
          >
            Github URL
          </Link>
          <Link
            href="https://serene-basin-19147.herokuapp.com/"
            underline="none"
          >
            Deployed URL
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={TechBlog}
          alt="Tech Blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tech Blog
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A simple tech blog to write about tech where you can publish
            articles, blog posts, and thoughts and opinions.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href="https://github.com/MSaideman/CMS-Tech-Blog"
            underline="none"
          >
            Github URL
          </Link>
          <Link
            href="https://murmuring-garden-59790.herokuapp.com/"
            underline="none"
          >
            Deployed URL
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
