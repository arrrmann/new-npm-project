import React from "react";
import './button.css'

// interface Identife{
//     text:string;
// }

export default function Button({text}:{text:string}){
    return(
        <button className="btn">
            {text}
        </button>
    )
}