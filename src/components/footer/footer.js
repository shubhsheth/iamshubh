import { Link } from "gatsby"
import React from "react"

import './footer.css'


const Footer = () => {
    return (
        <>
            <svg width="0" height="0">
                <clipPath id="wave">
                    <path d="M1920 697.723V53.7232C1920 53.7232 1795 -7.27619 1608.5 0.723234C1422 8.72266 1332 65.7227 1260 65.7227C1188 65.7227 1038.5 -0.276188 936 0.723234C833.5 1.72266 770 65.7227 633.5 65.7227C497 65.7227 370 0.723234 228 0.723234C86 0.723234 0 89.7227 0 89.7227V697.723H1920Z" fill="#F8F8F8"/>
                </clipPath>
            </svg>
            <footer>
                <div className="container">
                    <div className="newsletter">
                        <h3>A front-end blog newsletter</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="menu">
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;