import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './services.css';
import computer from '../../assets/computer img.png';
import search from '../../assets/search img.png';
import Btn from '../../widgets/button';
 
const Services = () => {
  return (
    <section className="services">
      <Container>
        {/* First Service - Image on Left, Text on Right */}
        <Row className="service-row align-items-center">
          <Col md={6} className="service-image">
            <img src={computer} alt="Web & Mobile App Development" className="service-img" />
          </Col>
          <Col md={6} className="service-text">
            <h3>Web & Mobile App Development</h3>
            <p >Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
            <Btn><div className='btn-text'></div>Learn More</Btn>
          </Col>
        </Row>

        {/* Second Service - Text on Left, Image on Right */}
        <Row className="service-row align-items-center flex-md-row-reverse">
          <Col md={6} className="service-image">
            <img src={search} alt="Digital Strategy Consulting" className="service-img" />
          </Col>
          <Col md={6} className="service-text">
            <h3>Digital Strategy Consulting</h3>
            <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
            <Btn><div className='btn-text'></div>Learn More</Btn>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
