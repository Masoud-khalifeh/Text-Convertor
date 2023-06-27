import React, { useState } from "react";
import Nav from './Nav';
import './Styles/Home.css';
import PrevText from "./PrevText";



export default function Home() {
    const [searchedText, setSearchedText] = useState([{ id: 1000, OText: "sefsd hsdhfshd sdhsd dfg efg dfgd fdfhg dfg dfg dfg df fg dfhg dgdh fguh dhg  ", EText: "sdsdksdsdo sdsdo sds dsd sd " },])

    //This function produces (num) previous search to show, if it is less than num, so produces empty ones
    function RenderEmptyField(num) {
        const updatedArray = [];
        for (let i = 0; i < num; i++) {
            if (searchedText[i]) {
                updatedArray.push({ ...searchedText[i], OText: trimText(searchedText[i].OText, 55) + " ..." });
            } else {
                updatedArray.push({
                    id: null,
                    OText: null
                });
            }
        }
        return updatedArray;
    }

    //this function select just (length) carachter of the text to show for handling overflow
    function trimText(str, length) {
        if (str.length <= length) {
            return str;
        } else {
            return str.substring(0, length);
        }
    }

    return (
        <div className="home">

            <Nav />

            <div className="homeCenter">
                <div className="homeCenterText">
                    <div className="textArea">
                        <h5>Orginal Text</h5>
                        <textarea name="textArea" id="textArea" rows="10" cols="50" className={`textAreatag `} />
                    </div>
                    <div className="textArea">
                        <h5>Easy Language</h5>
                        <textarea name="textArea" id="textArea" rows="10" cols="50" className={`textAreatag filled`} readOnly/>
                    </div>
                </div>
                <div>
                    <button className="button">Translate</button>
                </div>
            </div>

            <div className="homeBottom">
                <h5>List of Old Translations</h5>
                <div className="prevArea">
                    {RenderEmptyField(10).map(text => (
                        <PrevText id={text.id} Text={text.OText} />
                    ))}
                </div>
            </div>
        </div>
    )
}