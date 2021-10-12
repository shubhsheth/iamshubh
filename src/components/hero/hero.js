import { Link } from "gatsby"
import React, { useEffect } from 'react'
import "./hero.css";

import Waves from "../waves/waves.js"

const Hero = () => {

    return (
        <section className="hero">
			<div className="profile">
				<div className="animation-wrapper">
					<svg id="visual" viewBox="0 0 450 450" width="450" height="450" xmlns="http://www.w3.org/2000/svg" version="1.1">
						<g transform="translate(270, 250)">
							<path 
								id="blob1"
								d="M155.2 -162.9C177.9 -132.6 157 -66.3 136.2 -20.7C115.5 24.9 95.1 49.7 72.4 76.4C49.7 103.1 24.9 131.5 -4.2 135.7C-33.2 139.9 -66.5 119.8 -87.1 93.1C-107.8 66.5 -115.9 33.2 -123.2 -7.3C-130.5 -47.8 -137 -95.7 -116.4 -126C-95.7 -156.4 -47.8 -169.2 9.2 -178.4C66.3 -187.6 132.6 -193.2 155.2 -162.9" 
								fill="#13BDED">
							</path>
						</g>
						<g transform="translate(270, 250)">
							<path 
								id="blob2"
								d="M105.7 -123.2C123.3 -88.2 114.4 -44.1 125.5 11.1C136.6 66.3 167.7 132.6 150.2 159.4C132.6 186.2 66.3 173.6 11.5 162.2C-43.4 150.7 -86.7 140.4 -107.1 113.6C-127.4 86.7 -124.7 43.4 -121.5 3.2C-118.3 -37 -114.7 -74 -94.3 -109C-74 -144 -37 -177 3.5 -180.5C44.1 -184.1 88.2 -158.2 105.7 -123.2" 
								fill="#13BDED">
							</path>
						</g>
					</svg>
				</div>
				<div className="profile-image">
					<img src="/images/shubh.jpg" alt="Shubh Sheth - Web Developer"/>
                </div>
				<h1>Hi! I'm Shubh</h1>
            </div>
			<div className="social-links">
				<a href="https://www.linkedin.com/in/sheth-shubh/" target="_blank" rel="nofollow"><i className="fab fa-linkedin-in" /></a>
				<a href="https://twitter.com/reallybaddev" target="_blank" rel="nofollow"><i className="fab fa-twitter" /></a>
				<a href="https://github.com/shubhsheth" target="_blank" rel="nofollow"><i className="fab fa-github" /></a>
            </div>
			<div className="page-links">
				<Link to="/blog">Latest&nbsp;Posts</Link>
				<a href="/resume.pdf" target="_blank" rel="nofollow">Resume</a>
            </div>
			<Waves />
			<Waves />
			<Waves />
			<Waves />
        </section>
    )
}

export default Hero;