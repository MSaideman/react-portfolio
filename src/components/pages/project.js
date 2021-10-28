import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import EventListener from "../assets/eventlistener.png";
import TechBlog from "../assets/tech blog.png";
import BudgetTracker from "../assets/budgettracker.png"
import WorkoutTracker from "../assets/workouttracker.png"
import PetFinder from "../assets/petfinder.png"
import Weather from "../assets/weather.png"
import Grid from '@mui/material/Grid';

export default function Project() {
  return (
    <React.Fragment>
      <Grid container spacing={3} style={{marginLeft: 20}}>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, maxHeight:310 }}>
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
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, maxHeight:310  }}>
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
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, maxHeight:310  }}>
        <CardMedia
          component="img"
          height="140"
          image={BudgetTracker}
          alt="Budget tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Budget Tracker
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The user will be able to add expenses and deposits to their budget with or without a connection.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href="https://github.com/MSaideman/budget-tracker"
            underline="none"
          >
            Github URL
          </Link>
          <Link
            href="https://desolate-sea-81063.herokuapp.com/"
            underline="none"
          >
            Deployed URL
          </Link>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, maxHeight:310  }}>
        <CardMedia
          component="img"
          height="140"
          image={WorkoutTracker}
          alt="Workout tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Workout Tracker
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An app to help a consumer reach their fitness goals more quickly by tracking their workout progress.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href="https://github.com/MSaideman/My-Workout-Tracker"
            underline="none"
          >
            Github URL
          </Link>
          <Link
            href="https://powerful-eyrie-57410.herokuapp.com/?id=6172181f352a110016b199d7"
            underline="none"
          >
            Deployed URL
          </Link>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, maxHeight:310  }}>
        <CardMedia
          component="img"
          height="140"
          image={PetFinder}
          alt="petfinder app"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pet Finder App
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An app to help a consumer choose what type of animal they want and the zip code they are looking for to find their perfect fit.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href="https://github.com/MSaideman/find-your-forever-friend"
            underline="none"
          >
            Github URL
          </Link>
          <Link
            href="https://msaideman.github.io/find-your-forever-friend/"
            underline="none"
          >
            Deployed URL
          </Link>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345, maxHeight:310  }}>
        <CardMedia
          component="img"
          height="140"
          image={Weather}
          alt="weather dashboard"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An app to see the weather outlook for multiple cities.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href="https://github.com/MSaideman/weather-dashboard"
            underline="none"
          >
            Github URL
          </Link>
          <Link
            href="https://msaideman.github.io/weather-dashboard/"
            underline="none"
          >
            Deployed URL
          </Link>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}
