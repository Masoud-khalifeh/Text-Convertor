import React from "react";
import { Link } from "react-router-dom";
import './Styles/Nav.css';

export default function Nav(props) {

    return (
        <nav className="nav">
            <Link className="link" onClick={props.new} to={"/"}>New Translation</Link>
            <Link className="link" to={"/about"}>About</Link>
        </nav>
    )
}