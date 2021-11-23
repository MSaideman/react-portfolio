import * as React from "react";
import ResumePic from "../assets/MackenzieSaideman2021_12.pdf";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Resume() {
  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: "white",
          paddingBottom: "100px",
          color: "#2b2d42",
          fontFamily: "geneva",
          paddingTop: ".5rem",
        }}
      >
        <Container fixed  sx={{
          bgcolor: "#3a5a40",
          paddingBottom: "100px",
          color: "white",
          fontFamily: "geneva",
          paddingTop: ".5rem",
          borderRadius:".5rem",
          marginTop:".5rem"
        }}>
          <div>
            <article>
              <h2 data-testid="h1tag" className="top-title">
                Resume Summary
              </h2>
              <a
                  href={ResumePic}
                  download="Mackenzie Saideman Resume"
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  className="resume"
                >
                  (download full resume here)
      </a>
              <hr></hr>
              <div>
                <div  style={{ marginBottom: "2rem" }}>
                  <h3 style={{fontWeight:"bold"}}>Education</h3>
                  <h4>BS in Marine Biology from UCSD</h4>
                  <h8>Graduated 2019</h8>
                  <h4>Certificate in Full Stack Web Development from UCSD</h4>
                  <h8>Graduated 2021</h8>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                <h3 style={{fontWeight:"bold"}}>Tools</h3>
                <ul>
                  <li>Javascript</li>
                  <li> HTML  </li>
                  <li> CSS   </li>
                  <li>ReactJS   </li>
                  <li>Node   </li>
                  <li>Express   </li>
                  <li>MySQL  </li>
                  <li>MongoDB  </li>
                </ul>
                </div>
                <h3 style={{fontWeight:"bold"}}>Professional Experience</h3>
                <ul>
                  <li>Project Manager at On Lok </li>
                  <li>Project Coordinator at Sorrento Therapeutics</li>
                  <li>Project Coordinator at Argen Corporation</li>
                  <li>
                    QA and Manufacturing Intern at Catalent Pharma Solutions
                  </li>
                  <li>
                    Scientific Illustrator and Research Intern at Scripps
                    Institute of Oceanography
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </Box>
    </React.Fragment>
  );
}
