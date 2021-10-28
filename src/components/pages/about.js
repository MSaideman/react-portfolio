import * as React from "react";
import Avatar from "../assets/avatar.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


export default function About() {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#5c677d", color: '#001233' }}>
        <Container fixed>
          <h2 class="top-title">Mackenzie Saideman</h2>
          <hr></hr>
          <div>
            <img id="avatar" src={Avatar} alt="Mackenzie Saideman" />

            <p>
              Project Manager with a demonstrated history of working in the life
              sciences, medical device, and nonprofit industries.
            </p>
            <p>
              Skilled in data analysis, coordination of complex projects,
              process improvement in highly regulated industries, and
              development of E-commerce websites.
            </p>
          </div>
        </Container>
      </Box>
    </React.Fragment>
  );
}
