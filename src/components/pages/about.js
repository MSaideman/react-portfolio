
import React from 'react';
import Avatar from '../assets/avatar.png'

export default function About() {
    return (
      <section className="container">
      <h2 class="top-title">Mackenzie Saideman</h2>
      <hr></hr>
      <div>
          <img id="avatar" src={Avatar} alt="Mackenzie Saideman" />

          <p>
          Project Manager with a demonstrated history of working in the life sciences, medical device, and nonprofit industries. 
          </p>
          <p>
          Skilled in data analysis, coordination of complex projects, process improvement in highly regulated industries, and development of E-commerce websites.
          </p>
      </div>
  </section>
    );
  }