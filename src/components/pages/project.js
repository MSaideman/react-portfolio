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
      <Grid container spacing={3} style={{marginLeft: 20, fontFamily:"geneva"}}>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 360, maxHeight:370 }}>
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
          <Typography variant="body2" color="#283618" style={{marginBottom:"1rem"}}>
            A simple event app to find and host events using our own server-side
            API that stores users and events.
          </Typography>
          <Typography variant="body2" color="text.secondary">
           MVC paradigm with RESTful APIs, MySQL, JAWDB, and Javascript.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Link
            href="https://github.com/MSaideman/Event-Listener-App"
            underline="none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
      <Card sx={{ maxWidth: 360, maxHeight:370  }}>
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
          <Typography variant="body2" color="#283618" style={{marginBottom:"1rem"}}>
            A simple tech blog to write about tech where you can publish
            articles, blog posts, and thoughts and opinions.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MVC paradigm with RESTful APIs, MySQL, JAWDB, and Javascript.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Link
            href="https://github.com/MSaideman/CMS-Tech-Blog"
            underline="none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
      <Card sx={{ maxWidth: 360, maxHeight: 370  }}>
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
          <Typography variant="body2" color="#283618" style={{marginBottom:"1rem"}}>
          The user will be able to add expenses and deposits to their budget.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Online/offline capabilities using MongoDB, IndexedDB, PWA, and Javascript.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Link
            href="https://github.com/MSaideman/budget-tracker"
            underline="none"

          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
      <Card sx={{ maxWidth: 360, maxHeight:370  }}>
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
          <Typography variant="body2" color="#283618" style={{marginBottom:"1rem"}}>
          An app to help a consumer reach their fitness goals more quickly by tracking their workout progress.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MVC paradigm with RESTful APIs, MongoDB, robo3t, and Javascript.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Link
            href="https://github.com/MSaideman/My-Workout-Tracker"
            underline="none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
      <Card sx={{ maxWidth: 360, maxHeight:370  }}>
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
          <Typography variant="body2" color="#283618" style={{marginBottom:"1rem"}}>
          An app to help a consumer choose their perfect pet.
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Agile methodologies in a group project to build an app using server-side APIs and client-side storage to store persistent data.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Link
            href="https://github.com/MSaideman/find-your-forever-friend"
            underline="none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
      <Card sx={{ maxWidth: 360, maxHeight:370 }}>
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
          <Typography variant="body2" color="#283618" style={{marginBottom:"1rem"}}>
          An app to see the weather outlook for multiple cities.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Javascript, bootstrap, jQuery, OpenWeather API, and local storage.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Link
            href="https://github.com/MSaideman/weather-dashboard"
            underline="none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
