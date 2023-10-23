import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Button from "../Buuton/Button";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { btn, cardArray } from "./data-arrays";
import './app.css'

export default function App() {
    interface BtnFix {
        text: string;
        id: number;
        logo: string;
    }

    interface CardFix{
        title:string;
        description:string;
        imgURL:string;
        id:number
    }

    const dataCard=cardArray.map(({title, description, imgURL, id}:CardFix)=>{
        return <Card title={title} description={description} imgURL={imgURL} key={id}/>
    })

    const dataBtn = btn.map(({ text, id }: BtnFix) => {
        return <Button text={text} key={id} />
    })

    return (
        <>
            <NavBar />
            <Header />
            <div className="btn-wrapper">
                {dataBtn}
            </div>
            <div className="card-wrapper">
                {dataCard}
            </div>
            <Footer/>
        </>
    )
}

