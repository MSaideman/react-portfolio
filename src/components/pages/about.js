import * as React from "react";
import Photo from "../assets/avatar.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function About() {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#5c677d", color: '#001233', paddingBottom:'100px' }}>
        <Container fixed>
          <h2 class="top-title">About Me</h2>
          <hr></hr>
          <div>
          <Stack direction="row" spacing={2}>
            <Avatar id="avatar" src={Photo} alt="Mackenzie Saideman" sx={{ width: 150, height: 150 }} /> 
          </Stack>
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
