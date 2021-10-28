import * as React from "react";
import Photo from "../assets/avatar.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function About() {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#white", color: '#001233', paddingBottom:'300px', marginLeft:"200px", marginRight:"200px"}}>
        <Container fixed>
          <h2 className="top-title">About Me</h2>
          <hr></hr>
          <div>
          <Stack direction="row" spacing={2} sx={{paddingBottom:'30px'}}>
            <Avatar id="avatar" src={Photo} alt="Mackenzie Saideman" sx={{ width: 150, height: 150 }} /> 
          </Stack>
            <p>
              I am a Project Manager with a demonstrated history working in the life sciences, medical device, and nonprofit industries.  I'm eager to blend my project management experience with my web development skills to enhance the way cross-functional teams collaborate.
            </p>
            <div>
            Some skills I bring to the table:
              <ul>
              <li>Javascript</li>
              <li>HTML/CSS</li>
              <li>ReactJS</li>
              <li>Node</li>
              <li>Express</li>
              <li>Communication</li>
              <li>Creativity</li>
              </ul>
            </div>
            <p>
              
            </p>
          </div>
        </Container>
      </Box>
    </React.Fragment>
  );
}
