import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Button from "../Buuton/Button";
import './app.css'

export default function App(){
    const btn:object={text:'Download App'}
    return(
        <>
        <NavBar/>
        <Header/>
        <div className="btn-wrapper">
            <Button />
            <Button/>
        </div>
        </>
    )
}

