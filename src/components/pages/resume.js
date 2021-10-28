import * as React from "react";
import ResumePic from "../assets/resume.png";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function Resume() {
  return (
    <React.Fragment>
      <Container fixed>
        <div>
          <Link
            href="https://drive.google.com/file/d/1mCQOajsW_QIlv_T33E0Y4IR_gRp2xW00/view?usp=sharing"
            underline="none"
          >
            Download Here
          </Link>
          <div>
            <img alt="resume" src={ResumePic} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
