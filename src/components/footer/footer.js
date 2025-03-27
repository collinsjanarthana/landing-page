import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col md={7} className="footer-logo">
            <img src={logo} alt="Logo" className="logo" />
            <p className="footer-text">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </Col>
          <Col md={2} className="footer-section">
            <h5>Our Technologies</h5>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Our Services</h5>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row className="footer-bottom">
          <Col>
            <p className="footer-links">
              Privacy Policy <span className="divider">|</span> Terms & Conditions
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
