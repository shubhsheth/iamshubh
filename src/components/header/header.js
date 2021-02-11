import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import './header.css'

const Header = ({ siteTitle }) => {

    return (
        <header>
            <Link to="/">iamshubh</Link>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
