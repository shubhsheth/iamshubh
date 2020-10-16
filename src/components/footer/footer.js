import { Link } from "gatsby"
import React from "react"

import { Container, Image } from 'react-bootstrap'

import './footer.css'

import inIcon from '../../images/icons/in.png';
import cpIcon from '../../images/icons/cp.png';
import ghIcon from '../../images/icons/gh.png';

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
                                <Image src={inIcon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/shubhsheth" target="_blank" rel="noopener noreferrer nofollow">
                                <Image src={cpIcon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/shubhsheth/" target="_blank" rel="noopener noreferrer nofollow">
                                <Image src={ghIcon} />
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