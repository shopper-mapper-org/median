import React from "react";
import { Link } from "react-router-dom";
import { FaRoad } from "react-icons/fa" 

const NavBar = () => {

    return(
        <div className="nav-container">
            <nav className="container">
                <Link to="/">
                    <FaRoad
                        className="page-logo" 
                        aria-label="Median page logo and home button"
                    />
                </Link>
                <ul>
                    <li>
                        <Link to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;