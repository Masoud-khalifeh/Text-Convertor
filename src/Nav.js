import React from "react";
import { Link } from "react-router-dom";
import './Styles/Nav.css';

export default function Nav() {

    return (
        <nav className="nav">
            <Link className="link">New Translation</Link>
            <Link className="link">About</Link>
        </nav>
    )
}