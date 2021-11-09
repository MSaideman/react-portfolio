// import { Navbar, Container, Nav } from 'react-bootstrap';
import * as React from "react";
import Box from '@mui/material/Box';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Box sx={{bgcolor: 'white', paddingBottom:'.5rem', color:'#2b2d42'}}>
      <nav className="navbar navbar-expand-lg  navbar-dark ">
    <div>
      <ul className="nav green">
        <li className="nav-item" class="active">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >Home
         
          </a>
        </li>
        <li className="nav-item" class="active">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About me
          </a>
        </li>
        <li className="nav-item" class="active">
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
        <li className="nav-item" class="active">
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
        <li className="nav-item" class="active">
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
    </nav>
    </Box>
  );
}

export default NavTabs;
