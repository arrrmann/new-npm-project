import React from "react";
import './navbar.css'

export default function NavBar(){
    return(
        <header>
            <div className="logo">
                LogoType
            </div>
            <div>
                <ul className="links">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                    <li>Inchvor NavBar i li</li>
                    <li>Link6Dropdown</li>
                </ul>
            </div>
        </header>
    )
}