import React from "react";
import Nav from "./Nav";
import './Styles/About.css'
import { loremIpsum } from "lorem-ipsum";


export default function About() {
    const text = loremIpsum({
        count: 3,                      // Number of paragraphs
        format: 'plain',               // Plain text format
        units: 'paragraphs',           // Output units (paragraphs, sentences, or words)
    });

    return (
        <div className="about">
            <Nav about={false} />
            <div className="aboutBottom">
                <h2>About</h2>
                {text}
            </div>
        </div>

    )
}