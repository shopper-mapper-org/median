import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Created at Juno College 2023 by Graydon, John, and Michael</p>
        <a
          className="code_link"
          href="https://github.com/shopper-mapper-org/shopper-mapper"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> Project Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
