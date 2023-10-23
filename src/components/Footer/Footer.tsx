import React from 'react';
import './footer.css';


function Footer() {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='footer-license'>
                    This page is made by developer Arman Arustamyan
                </div>
                <div className="footer-links">
                    <a href="https://www.youtube.com/">You Tube</a>
                    <a href="https://github.com/">Git Hub</a>
                    <a href="https://twitter.com/">Twitter</a>
                    <a href="https://www.microsoft.com/">Microsoft</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;