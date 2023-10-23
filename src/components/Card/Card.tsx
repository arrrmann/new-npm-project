import React from 'react'
import './card.css'

interface CardInterface {
    title: string;
    description: string;
    imgURL: string;
}

export default function Card({ title, description, imgURL }: CardInterface) {


    return (
        <div className="card">
            <img src={imgURL} alt='alt' />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
