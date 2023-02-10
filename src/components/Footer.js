import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>Created at Juno College 2023 by Graydon, John and Michael.</p>
      <a
        className='code_link'
        href='https://github.com/Maktastix/portfolio_website.git'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub /> Project Code
      </a>
    </footer>
  );
};

export default Footer;
