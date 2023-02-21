import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><h1>MEDIAN</h1></Link>
        <h2>brought to you by the good folks at <strong>SHOPPER MAPPER</strong></h2>
        <h3>the world's most average places at your fingertips</h3>
      </div>
    </header>
  )
};

export default Header;
