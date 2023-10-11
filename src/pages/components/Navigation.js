import React from "react";
import { Link } from "react-router-dom";

const NavigationCompoent = () => {

    return <nav>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    </nav>
};

export default NavigationCompoent;