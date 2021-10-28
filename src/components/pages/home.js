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
      <Grid container spacing={0} style={{paddingBottom:"50px"}}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 750 }}>
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
          <Card sx={{ maxWidth: 750 }}>
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
            style={{paddingBottom:"80px"}}
          >
            Learn more about Green Fluorescent Protein here!  
          </Link>
    </React.Fragment>
  );
}
