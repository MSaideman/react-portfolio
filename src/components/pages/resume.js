import * as React from "react";
import ResumePic from "../assets/RESUME.png";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box';

export default function Resume() {
  return (
    <React.Fragment>
      <Box sx={{bgcolor: '#5c677d', paddingBottom:'100px'}}>
      <Container fixed>
        <div>
          <Link
            href="https://drive.google.com/file/d/1mCQOajsW_QIlv_T33E0Y4IR_gRp2xW00/view?usp=sharing"
            underline="none"
            color="#001845"
            display="flex"
            justifyContent="left"
          >
            Download Here
          </Link>
          <div>
            <img alt="resume" src={ResumePic}/>
          </div>
        </div>
      </Container>
      </Box>
    </React.Fragment>
  );
}
