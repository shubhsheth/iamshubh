import { Link } from "gatsby"
import React, { useEffect } from 'react'
import "./hero.css";


const Hero = () => {

	useEffect(() => {

	});

    return (
        <section className="hero">
			<div className="profile">
				<div className="animation-wrapper">
					<div className="wave -one"></div>
					<div className="wave -two"></div>
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
				<a href="/resume.pdf">Resume</a>
            </div>
        </section>
    )
}

export default Hero;