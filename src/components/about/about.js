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
                        Hello, my name is Shubh. I am a student in Computer Science at the University of Houston. I am also a Web Developer at RegexSEO in Houston.
                    </p>
                    <p>
                        I had a passion for technology since I was very young. But, when I was 14 I stumbled upon programming. I have kept learning more and more interesting stuff from then.
                    </p>
                </div>
                <div className="badges">
                    <div className="badge">
                        <div className="title">IMOC Intern</div>
                        <div className="icon"><img src="/icons/nasa.png"/></div>
                    </div>
                    <div className="badge">
                        <div className="icon"><img src="/icons/uh.png"/></div>
                        <div className="title">Com-Sci Student</div>
                    </div>
                    <div className="badge">
                        <div className="title">Vice President</div>
                        <div className="icon"><img src="/icons/cougar.png"/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About