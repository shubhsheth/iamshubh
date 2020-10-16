import { Link } from "gatsby"
import React from "react"

import { Container, Image } from 'react-bootstrap'

import './footer.css'


const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer-nav">
                    <ul className="footer-nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog/">Blog</Link></li>
                        <li><Link to="/#home-contact">Portfolio</Link></li>
                        <li><Link to="/#home-contact">Contact</Link></li>
                    </ul>
                    <ul className="footer-nav-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/sheth-shubh/" target="_blank" rel="noopener noreferrer nofollow">
                                <Image src={'/icons/in.png'} />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/shubhsheth" target="_blank" rel="noopener noreferrer nofollow">
                                <Image src={'/icons/cp.png'} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/shubhsheth/" target="_blank" rel="noopener noreferrer nofollow">
                                <Image src={'/icons/gh.png'} />
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="footer-copyright">
                    &copy; Copyright {new Date().getFullYear()}
                </div>
            </Container>
        </footer>
    )
}

export default Footer;