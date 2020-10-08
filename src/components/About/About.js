import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';



export const About = () => {

    
    useEffect(() => {

        document.addEventListener('scroll', function() {
            //get scroll value 
            let height = window.scrollY;

            //calculate the amount of effect to apply
            let translate1 = `translateY(${height/4}px)`;
            let translate2 = `translateY(-${height/4}px)`;

            //apply the effect
            document.querySelector('.parallax_about-one').style.transform = translate1;
            document.querySelector('.parallax_about-two').style.transform = translate2;

            
        });

    }, []);

    return (
        <section className="home-about">
            <div className="parallax_about parallax_about-two">
                <img src={process.env.PUBLIC_URL + '/img/about.png'} className="img_about" alt="About" />
            </div>
            <div className="parallax_about parallax_about-one">
                <img src={process.env.PUBLIC_URL + '/img/about.png'} className="img_about" alt="About" />
            </div>
            <Container>
                <Row>
                    <Col md={7} lg={6} className="abt_img">
                        <span className="abt_img_portrait"></span>
                    </Col>
                    <Col md={5} lg={6} className="abt_info">
                        <div className="wrapper">
                            <h1 className="abt_info_name">Shubh Sheth</h1>
                            <div className="badges">
                                <div className="badge">
                                    <img src="/img/regex-icon.png" alt="Regex SEO" />
                                    Web Developer
                                </div>
                                <div className="badge">
                                    <img src="/img/uh-icon.png" alt="University of Houston" />
                                    Com-Sci Student
                                </div>
                                <div className="badge">
                                    <img src="/img/cougar-icon.png" alt="CougarCS" />
                                    Webmaster
                                </div>                                
                            </div>
                            <p>
                                Hello, my name is Shubh. I am a student in
                                Computer Science at the University of Houston. I
                                am also a Web Developer at RegexSEO in Houston.
                            </p>
                            <p>
                                I had a passion for computers since I was very young.
                                But, when I was 14 I stumbled upon programming. I have
                                kept learning more and more interesting stuff from then.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;