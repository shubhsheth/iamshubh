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
