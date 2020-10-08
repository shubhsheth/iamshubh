import React from 'react';
import './Footer.css';

import { Container } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer-nav">
                    <ul className="footer-nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#home-contact">Work</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/#home-contact">Contact</a></li>
                    </ul>
                    <ul className="footer-nav-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/sheth-shubh/" target="_blank" rel="noopener noreferrer nofollow"><img src="/img/icon-in.png" alt="Icon" /></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/shubhsheth" target="_blank" rel="noopener noreferrer nofollow"><img src="/img/icon-cp.png" alt="Icon" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/shubhsheth/" target="_blank" rel="noopener noreferrer nofollow"><img src="/img/icon-gh.png" alt="Icon" /></a>
                        </li>
                    </ul>
    
                </div>
                <div className="footer-copyright">
                    &copy; Copyright {new Date().getFullYear()}
                </div>
            </Container>
        </footer>
    );
};

export default Footer;