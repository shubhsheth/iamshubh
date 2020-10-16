import React, { useEffect } from 'react'
import Particles from 'react-particles-js'

import { Container, Row, Col, Image } from 'react-bootstrap';

import "./hero.css";

const Hero = () => {

    let figure, images, n, theta, currImage, s;

    const setupCarousel = () => {
        figure = document.querySelector('.carousel');
        images = figure.children;
        n = images.length;
        s = images[0].offsetWidth;
        theta = 2 * Math.PI / n;
        currImage = 0;

        let apothem = s / ((2 * Math.PI) / n);
        let transformOrigin = `50% 50% ${-1 * apothem}px`;

        if (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('Firefox') > -1) {
            figure.style.transformOrigin = transformOrigin;
        }

        for (let i = 0; i < n; i++) {
            let transform = `rotateY(${i * theta}rad)`;
            let element = images[i];

            element.style.transformOrigin = transformOrigin;
            element.style.transform = transform;
        }

        rotateCarousel(currImage);
    }


    const rotateCarousel = (imageIndex) => {

        figure = document.querySelector('.carousel');
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;

        if (navigator.userAgent.indexOf('Safari') > -1) {
            figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
        }
        currImage = imageIndex;
    }


    useEffect(() => {
        setupCarousel();

        document.querySelectorAll('.carousel_control').forEach((el, i) => {
            el.addEventListener('click', () => {
                rotateCarousel(i);
                document.querySelector('.carousel_control-active').classList.remove('carousel_control-active');
                document.querySelectorAll('.carousel_control')[i].classList.add('carousel_control-active');
            });
        });

        document.addEventListener('scroll', () => {
            //get scroll value 
            let height = window.scrollY;

            // parallax
            let inner = document.querySelector('.carousel_slide-1').clientHeight;
            if (height < inner) {
                let translate3 = `translateY(${height / 10}px)`;
                document.querySelector('.svg-wrapper').style.transform = translate3;
            }
        });

    });

    return (
        <section className="hero">
            <div className="carousel_outer">
                <div className="carousel">
                    {/* Carousel Slide 01 */}
                    <figure className="carousel_slide carousel_slide-1">
                        <div className="slide_content">
                            <div className="svg-wrapper">
                                <svg height="60" width="320" xmlns="https://www.w3.org/2000/svg">
                                    <rect className="shape" height="60" width="320" />
                                </svg>
                                <h1 className="title">iamshubh</h1>
                            </div>
                        </div>
                    </figure>
                    {/* Carousel Slide 02 */}
                    <figure className="carousel_slide carousel_slide-2">
                        <div className="slide_content">
                            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 270
                                        },
                                        "size": {
                                            "value": 5,
                                            "random": true
                                        },
                                        "opacity": {
                                            "value": 0.6
                                        },
                                        "interactivity": {
                                            "detect_on": "canvas",
                                            "events": {
                                                "onhover": {
                                                    "enable": true
                                                }
                                            }
                                        }
                                    }
                                }} />

                            <div className="connectCardCont offset-xl-2 offset-md-1">
                                <Image src={"/images/business-card.jpg"} className="connect_cadrd" alt="card" />
                            </div>

                            <Col md={{ span: 6, offset: 6 }} className="social-icons-cont">
                                <ul className="social-icons-list">
                                    <li>
                                        <span className="in">
                                            <Image src={'/icons/in.png'} />
                                        </span>
                                        <a href="https://www.linkedin.com/in/sheth-shubh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </li>
                                    <li>
                                        <span className="gh">
                                            <Image src={'/icons/gh.png'} />
                                        </span>
                                        <a href="https://github.com/shubhsheth/" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </li>
                                </ul>
                            </Col>
                        </div>
                    </figure>
                    {/* Carousel Slide 03 */}
                    <figure className="carousel_slide carousel_slide-3">
                        <div className="slide_content">
                            <span>
                                <h3>Wait for the</h3><h1>Best</h1>
                            </span>
                        </div>
                    </figure>
                    {/* Carousel Slide 04 */}
                    <figure className="carousel_slide carousel_slide-4">
                        <div className="slide_content">
                            <span>
                                <h3>The Best is</h3><h1>Coming</h1>
                            </span>
                        </div>
                    </figure>

                    {/* Placeholder Slides for Transition Effects */}
                    <figure className="carousel_slide carousel_slide-5">
                        <Image src={"/images/new york.jpg"} alt="New York" />
                    </figure>
                    <figure className="carousel_slide carousel_slide-6"></figure>
                </div>
            </div>
            <div className="carousel_controls">
                <Container>
                    <Row>
                        {/* Carousel Button 01 */}
                        <Col className="carousel_control carousel_control-active">
                            { /* eslint-disable-next-line */}
                            <a href="#" className="btn-carousel_control"></a>
                            <h4 className="carousel_control_button_name">Intro</h4>
                        </Col>
                        {/* Carousel Button 02 */}
                        <Col className="carousel_control">
                            { /* eslint-disable-next-line */}
                            <a href="#" className="btn-carousel_control"></a>
                            <h4 className="carousel_control_button_name">Connect</h4>
                        </Col>
                        {/* Carousel Button 03 */}
                        <Col className="carousel_control">
                            { /* eslint-disable-next-line */}
                            <a href="#" className="btn-carousel_control"></a>
                            <h4 className="carousel_control_button_name">Game</h4>
                        </Col>
                        {/* Carousel Button 04 */}
                        <Col className="carousel_control">
                            { /* eslint-disable-next-line */}
                            <a href="#" className="btn-carousel_control"></a>
                            <h4 className="carousel_control_button_name">Reff.</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Hero;