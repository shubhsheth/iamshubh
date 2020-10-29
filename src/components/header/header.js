import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import './header.css'

const Header = ({ siteTitle }) => {

    const [isToggled, setToggled] = useState(false);

    useEffect(() => {
        document.querySelectorAll('nav ul li a').forEach((el, i) => {
            el.addEventListener('click', () => {
                setToggled(false);
            });
        });
    });

    const navClickHandler = (e) => {
        e.preventDefault();
        setToggled(!isToggled);
    }

    return (
        <>
            <header className="header">
                <div className="header-inner">
                    <Link to="/"><h1>{siteTitle}</h1></Link>
                    <a href={void(0)}
                        className={isToggled ? 'active icon' : 'icon'}
                        onClick={navClickHandler} >
                        <div className="hamburger"></div>
                    </a>
                </div>
            </header>
            <nav className={!isToggled ? 'close' : ''}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                    <li><Link to="/#home-contact">Portfolio</Link></li>
                    <li><Link to="/#home-contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
