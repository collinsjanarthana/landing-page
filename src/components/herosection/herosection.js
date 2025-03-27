import React from 'react';
import { Container } from 'react-bootstrap';
import './herosection.css';
import Btn from '../../widgets/button';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Gradient Overlay */}
      <Container>
        <div className="hero-content">
          <h1>We Crush Your <br/> Competitors, Goals, and <br/>Sales Records - Without<br/> The B.S.</h1>
          <Btn>
            <div className='btn-text'>Get Free Consultation</div>
            </Btn>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
