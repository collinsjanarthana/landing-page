import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './herosection.css';
// import heroBg from "../../assets/Hero Section.png"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Gradient Overlay */}
      <Container>
        <div className="hero-content">
          <h1>We Crush Your <br/> Competitors, Goals, and <br/>Sales Records - Without<br/> The B.S.</h1>
          <Button className="cta-btn">
            <div className='btn-text'>Get Free Consultation</div>
            </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
