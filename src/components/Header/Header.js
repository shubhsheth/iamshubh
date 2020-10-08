import React, { useState } from 'react';
import './Header.css';

export const Header = () => {

    const [isToggled, setToggled] = useState(false);

    
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
        <>
            <header className="header">
                <div className="header-inner">
                    <a href="/"><h1>iamshubh</h1></a>
                    <div 
                        className={isToggled ? 'active icon' : 'icon'} 
                        onClick={toggleTrueFalse} >
                        <div className="hamburger"></div>
                    </div>
                </div>
            </header>
            <nav className={!isToggled ? 'close' : ''}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog/">Blog</a></li>
                    <li><a href="/#home-contact">Portfolio</a></li>
                    <li><a href="/#home-contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}; 

export default Header;