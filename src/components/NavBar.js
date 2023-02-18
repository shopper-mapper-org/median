import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRoad, FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="nav-container">
            <nav className="container">
                <Link to="/">
                    <FaRoad
                        title="Median Logo - Home Page"
                        className="page-logo"
                        aria-label="Median page logo and home button"
                    />
                </Link>
                <ul className={toggle ? "nav-list active" : "nav-list"}>
                    <li>
                        <Link to="/About" onClick={handleToggle}>About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" onClick={handleToggle}>Contact</Link>
                    </li>
                </ul>
                <div className="menu" onClick={handleToggle}>
                    {toggle ? (<FaTimes className="close" />) : (<FaBars className="hamburger" />)}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;