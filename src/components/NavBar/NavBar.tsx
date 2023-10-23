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
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
                    <li>Dropdown</li>
                </ul>
            </div>
        </header>
    )
}