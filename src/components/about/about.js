import React, { useEffect } from 'react'
import "./about.css"


const About = () => {

    useEffect(() => {

    }, []);

    return (
        <section className="about">
            <div className="container">
                <div className="info">
                    <h2 className="section-heading">About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </div>
                <div className="badges">
                    <div className="badge">
                        <div className="title">Web Developer</div>
                        <div className="icon"><img src="/icons/regex.png"/></div>
                    </div>
                    <div className="badge">
                        <div className="icon"><img src="/icons/uh.png"/></div>
                        <div className="title">Com-Sci Student</div>
                    </div>
                    <div className="badge">
                        <div className="title">Webmaster</div>
                        <div className="icon"><img src="/icons/cougar.png"/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About