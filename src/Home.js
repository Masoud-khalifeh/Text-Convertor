import React, { useState, useEffect } from "react";
import Nav from './Nav';
import './Styles/Home.css';
import PrevText from "./PrevText";
import { v4 as uuid } from 'uuid';


export default function Home() {

    const [searchedText, setSearchedText] = useState(() => {
        const getLocalStorage = JSON.parse(window.localStorage.getItem("searchedText"));
        if (getLocalStorage) {
            return getLocalStorage
        } else {
            return ""
        }
    })
    const [inputText, setInputText] = useState("");
    const [eText, setEText] = useState("");
    const [isTranslated, setISTranslated] = useState(false);



    //This function produces (num) previous search to show, if it is less than num, so produces empty ones
    function RenderEmptyField(num) {
        const updatedArray = [];
        for (let i = 0; i < num; i++) {
            if (searchedText[i]) {
                updatedArray.push({ ...searchedText[i], OText: trimText(searchedText[i].OText, 35) + " ..." });
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



    function ChangeHandler(evt) {
        setEText({ text: "" });
        setISTranslated(false)
        setInputText({ text: evt.target.value })
    }


    function addText() {
        if (!isTranslated && inputText) {
            setSearchedText([...searchedText, { id: searchedText.length + 1000, OText: inputText.text, EText: inputText.text }]);
            setEText(inputText);
            setISTranslated(true);

        }

    }


    useEffect(() => {
        window.localStorage.setItem("searchedText", JSON.stringify(searchedText));
    }, [isTranslated])


    function newText() {
        setInputText({ text: "" });
        setEText({ text: "" })
    }


    return (
        <div className="home">

            <Nav new={newText} />

            <div className="homeCenter">
                <div className="homeCenterText">
                    <div className="textArea">
                        <h5>Orginal Text</h5>
                        <textarea name="textArea" id="textArea" rows="10" cols="50" className={`textAreatag `} value={inputText.text} onChange={ChangeHandler} />
                    </div>
                    <div className="textArea">
                        <h5>Easy Language</h5>
                        <textarea name="textArea" id="textArea" rows="10" cols="50" className={`textAreatag filled`} value={eText.text} readOnly />
                    </div>
                </div>
                <div>
                    <button className="button" onClick={addText}>Translate</button>
                </div>
            </div>

            <div className="homeBottom">
                <h5>List of Old Translations</h5>
                <div className="prevArea">
                    {RenderEmptyField(10).map(text => (
                        <PrevText id={text.id} Text={text.OText} key={uuid()}/>
                    ))}
                </div>
            </div>
        </div>
    )
}