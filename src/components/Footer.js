import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>Created at Juno College 2023 by Graydon, John, and Michael</p>
      <a
        className='code_link'
        href='https://github.com/shopper-mapper-org/shopper-mapper'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub /> Project Code
      </a>
    </footer>
  );
};

export default Footer;
