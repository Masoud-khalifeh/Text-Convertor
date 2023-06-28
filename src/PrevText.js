import React from "react";
import './Styles/PrevText.css'

export default function PrevText(props) {

    return (
        <div className="prevText" onClick={props.click}>
            {props.id &&
                <h5>ID{props.id}</h5>
            }
            {props.Text ?
                <p>{props.Text}</p> :
                <div className="empty">
                    <hr />
                    <hr />
                    <hr />
                </div>
            }

        </div>
    )
}