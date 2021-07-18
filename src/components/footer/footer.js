import { Link } from "gatsby"
import React from "react"

import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-wave">
                <svg width="0" height="0">
                    <clipPath id="wave">
                        <path d="M1920 697.723V53.7232C1920 53.7232 1795 -7.27619 1608.5 0.723234C1422 8.72266 1332 65.7227 1260 65.7227C1188 65.7227 1038.5 -0.276188 936 0.723234C833.5 1.72266 770 65.7227 633.5 65.7227C497 65.7227 370 0.723234 228 0.723234C86 0.723234 0 89.7227 0 89.7227V697.723H1920Z" fill="#F8F8F8"/>
                    </clipPath>
                </svg>
                <svg width="0" height="0">
                    <clipPath id="wave-mobile">
                        <path d="M767 371V28.5662C767 28.5662 717.065 -3.86896 642.562 0.384565C568.059 4.63809 532.106 34.9467 503.344 34.9467C474.581 34.9467 414.859 -0.146857 373.913 0.384565C332.966 0.915987 307.599 34.9467 253.07 34.9467C198.541 34.9467 147.807 0.384565 91.0813 0.384565C34.3552 0.384565 0 47.7082 0 47.7082V371H767Z" fill="#F8F8F8"/>
                    </clipPath>
                </svg>
            </div>
            <footer>
                <div className="container">
                    <div className="newsletter">
                        <h3>A front-end blog newsletter</h3>
                        <p>
                            Get quick-bits about the industry and early access to all upcoming posts
                        </p>
                        <form className="newsletter-form">
                            <div className="fields">
                                <input type="text" name="newsletter[name]" className="input name" placeholder="First Name" />
                                <input type="email" name="newsletter[email]" className="input email" placeholder="Email Address" />
                            </div>
                            <a href="javascript:void(0)" className="btn btn-subscribe">Subscribe</a>
                        </form>
                    </div>
                    <div className="menu">
                        <div className="menu-links">
                            <div className="links">
                                <div className="link-header">
                                    Links
                                </div>
                                <a className="link" to="/">RSS Feed</a>
                                <a className="link" href="mailto:shubhsheth8@gmail.com">Contact</a>
                                <div className="link-spacer"></div>
                                <a className="link" href="https://www.linkedin.com/in/sheth-shubh/" target="_blank" rel="nofollow">LinkedIn</a>
                                <a className="link" href="https://github.com/shubhsheth" target="_blank" rel="nofollow">GitHub</a>
                                <a className="link" href="https://twitter.com/reallybaddev" target="_blank" rel="nofollow">Twitter</a>
                            </div>
                            <div className="links">
                                <div className="link-header">
                                    Menu
                                </div>
                                <Link className="link" to="/blog/">Blog</Link>
                                <a className="link" href="/resume.pdf">Resume</a>
                                <Link className="link" to="/">Book Corner</Link>
                            </div>
                        </div>
                        <div className="copyright">
                            &copy; Copyright {new Date().getFullYear()} - Shubh Sheth. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;