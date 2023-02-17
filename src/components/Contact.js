import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp, FaPortrait } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="container">
      <section className="about-team">
        <h2>THE SHOPPER MAPPER TEAM</h2>
        <div className="team-container">
          <div className="team-member">
            <h3>Graydon James</h3>
            <div className="team-links">
              <a href="https://graydongames.com/"><FaPortrait /><p>Portfolio</p></a>
              <a href="https://www.linkedin.com/in/graydon-james/"><FaLinkedin /><p>LinkedIn</p></a>
              <a href="https://github.com/graydonj"><FaGithub /><p>GitHub</p></a>
              <a href="mailto:graydonj2@gmail.com"><FaEnvelope /><p>Email</p></a>
            </div>
          </div>
          <div className="team-member">
            <h3>John Malapit</h3>
            <div className="team-links">
              <a href="https://www.johnmal.dev/"><FaPortrait /><p>Portfolio</p></a>
              <a href="https://www.linkedin.com/in/john-mal/"><FaLinkedin /><p>LinkedIn</p></a>
              <a href="https://github.com/johnmal-dev"><FaGithub /><p>GitHub</p></a>
              <a href="mailto:johncmalapit@gmail.com"><FaEnvelope /><p>Email</p></a>
            </div>
          </div>
          <div className="team-member">
            <h3>Michael Makinde</h3>
            <div className="team-links">
              <a href="https://michaelmakinde.com/"><FaPortrait /><p>Portfolio</p></a>
              <a href="https://www.linkedin.com/in/michael-makinde-dev/"><FaLinkedin /><p>LinkedIn</p></a>
              <a href="https://github.com/Maktastix"><FaGithub /><p>GitHub</p></a>
              <a href="mailto:michael_makinde@outlook.com"><FaEnvelope /><p>Email</p></a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact