import * as React from 'react';
import ResumePic from "../assets/resume.png"
import Container from '@mui/material/Container';

export default function Resume() {
  return (
    <React.Fragment>
    <Container fixed>
    <div>
        <div>
            <img alt="resume" src={ResumePic} />
        </div>
    <div>
        <a alt="resume" href="https://drive.google.com/file/d/1mCQOajsW_QIlv_T33E0Y4IR_gRp2xW00/view?usp=sharing">Download Here</a>
    </div>
    </div>
    </Container>
  </React.Fragment>
  );
}

