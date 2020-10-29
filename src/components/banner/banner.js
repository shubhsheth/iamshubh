import React from 'react'
import { Container } from 'react-bootstrap';

import "./banner.css"

const Banner = () => (
    <section id="home-contact">
        <Container>
            <h1>Got Questions?</h1>
            <a href="mailto:shubhsheth8@gmail.com" target="_blank" rel="noopener noreferrer" className="email-me">Email Me!</a>
        </Container>
    </section>
)

export default Banner