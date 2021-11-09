import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Grid from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Photo from "../assets/avatar.png";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <Grid container direction={'row'} sx={{ bgcolor: "white", color: "#2b2d42", paddingBottom: "100px", fontFamily:"geneva", display:"flex", justifyContent:"center"}}>
          <Grid item style={{maxWidth:'40%', paddingRight:"5rem"}}>
          <h2 data-testid="h1tag" className="top-title">
            Contact Form
          </h2>
          <hr></hr>
          <form class="justify-content-center row" id="contact-form">
            <div class="mt-5 form-group">
              <label htmlFor="name">Name:</label>
              <input
                class="form-control"
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div class="mt-5 form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                class="form-control"
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div class="mt-5 form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                class="form-control"
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="7"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}

            <div class="mt-5 mb-5">
              <button
                data-testid="button"
                class="btn btn-outline-dark "
                type="submit"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          </Grid>
          <Grid item style={{paddingTop:'10%'}}>
          <Stack direction="row" spacing={2} sx={{paddingBottom:'30px', justifyContent:"center"}}>
            <Avatar id="avatar" src={Photo} alt="Mackenzie Saideman" sx={{ width: 150, height: 150 }} /> 
          </Stack>
          <ul style={{ listStyleType: "none" }}>
            <li>
              {" "}
              <Link
                href="mailto:mbsaideman@gmail.com"
                underline="none"
                color="#001845"
                display="flex"
                justifyContent="left"
                style={{ paddingBottom: "10px", justifyContent:"center" }}
              >
                mbsaideman@gmail.com
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="+1 (858) 880-6673"
                underline="none"
                color="#001845"
                display="flex"
                justifyContent="left"
                style={{ paddingBottom: "10px" }}
              >
                +1 (858) 880-6673
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://github.com/MSaideman"
                underline="none"
                color="#001845"
                display="flex"
                justifyContent="left"
                style={{ paddingBottom: "10px" }}
              >
                GitHub 
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://www.linkedin.com/in/mackenzie-saideman-2a36b8148/"
                underline="none"
                color="#001845"
                display="flex"
                justifyContent="left"
                style={{ paddingBottom: "10px" }}
              >
                LinkedIn
              </Link>
            </li>
          </ul>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Contact;
