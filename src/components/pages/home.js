import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Photo1 from "../assets/photo1.png";
import Photo2 from "../assets/photo2.png";
import Photo3 from "../assets/photo3.png";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export default function Home() {
  return (
    <React.Fragment>
      <h1 style={{fontFamily: "geneva", fontWeight:"bold", fontSize:"3rem", display:"flex", justifyContent: "center", color:"#3a5a40"}}>Mackenzie Saideman</h1>
      <Grid container spacing={0} style={{paddingBottom:"40px"}}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 750, filter: "grayscale(100%)" }}>
            <CardMedia
              component="img"
              height="550"
              image={Photo1}
              alt="photo1"
              
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 750 }}>
            <CardMedia
              component="img"
              height="550"
              image={Photo2}
              alt="photo2"
            />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 750, filter: "grayscale(100%)"  }}>
            <CardMedia
              component="img"
              height="550"
              image={Photo3}
              alt="photo1"
            />
          </Card>
        </Grid>
      </Grid>
      <Link
            href="https://www.biomicfuel.com/people"
            underline="none"
            color="#001845"
            display="flex"
            justifyContent="center"
            style={{paddingBottom:"80px", fontFamily: "geneva"}}
          >
            Learn more about Green Fluorescent Protein here!  
          </Link>
    </React.Fragment>
  );
}
