import React from "react";
import ResumePic from "../assets/resume.png"

export default function Resume() {
  return (
    <div>
        <div>
            <img alt="resume" src={ResumePic} />
        </div>
    <div>
        <a alt="resume" href="https://drive.google.com/file/d/1mCQOajsW_QIlv_T33E0Y4IR_gRp2xW00/view?usp=sharing">Download Here</a>
    </div>
    </div>
  );
}

