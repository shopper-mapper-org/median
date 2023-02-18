import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPortrait } from "react-icons/fa";

// FaMailchimp & FaMailBulk icons being used?

const Contact = () => {
  return (
    <div className="contact-only">
      <section className="container">
        <section className="about-team">
          <h2>THE SHOPPER MAPPER TEAM</h2>
          <div className="team-container">
            <div className="team-member">
              <h3>Graydon James</h3>
              <div className="team-links">
                <a
                  href="https://graydongames.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPortrait aria-label="Graydon James' portfolio" />
                  <p>Portfolio</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/graydon-james/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin aria-label="Graydon James' LinkedIn profile" />
                  <p>LinkedIn</p>
                </a>
                <a
                  href="https://github.com/graydonj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-label="Graydon James' GitHub profile" />
                  <p>GitHub</p>
                </a>
                <a
                  href="mailto:graydonj2@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope aria-label="Graydon James' e-mail" />
                  <p>Email</p>
                </a>
              </div>
            </div>
            <div className="team-member">
              <h3>John Malapit</h3>
              <div className="team-links">
                <a
                  href="https://www.johnmal.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPortrait aria-label="John Malapit's portfolio" />
                  <p>Portfolio</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/john-mal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin aria-label="John Malapit's LinkedIn profile" />
                  <p>LinkedIn</p>
                </a>
                <a
                  href="https://github.com/johnmal-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-label="John Malapit's GitHub profile" />
                  <p>GitHub</p>
                </a>
                <a
                  href="mailto:johncmalapit@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope aria-label="John Malapit's e-mail" />
                  <p>Email</p>
                </a>
              </div>
            </div>
            <div className="team-member">
              <h3>Michael Makinde</h3>
              <div className="team-links">
                <a
                  href="https://michaelmakinde.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPortrait aria-label="Michael Makinde's portfolio" />
                  <p>Portfolio</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-makinde-dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin aria-label="Michael Makinde's LinkedIn profile" />
                  <p>LinkedIn</p>
                </a>
                <a
                  href="https://github.com/Maktastix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-label="Michael Makinde's GitHub profile" />
                  <p>GitHub</p>
                </a>
                <a
                  href="mailto:michael_makinde@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope aria-label="Michael Makinde's e-mail" />
                  <p>Email</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
