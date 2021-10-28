// import { Navbar, Container, Nav } from 'react-bootstrap';
import * as React from "react";
// import NavTabs from "./navtabs";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Photo from "./assets/avatar.png";
import Box from '@mui/material/Box';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Box sx={{bgcolor: '#5c677d'}}>
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            <Stack direction="row" spacing={2}>
            <Avatar id="avatar" src={Photo} alt="Mackenzie Saideman" sx={{ width: 56, height: 56 }} /> 
          </Stack>
         
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
    </Box>
  );
}

export default NavTabs;
