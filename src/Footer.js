import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaFacebook, FaGlobe } from 'react-icons/fa';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col>
            <FaPhone className="footer-icon" /> <span className="footer-text">Toll free 1800 200 1234</span>
          </Col>
          <Col>
            <FaFacebook className="footer-icon" /> <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer" className="footer-link">www.facebook.com/cripumps</a>
          </Col>
          <Col>
            <FaGlobe className="footer-icon" /> <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer" className="footer-link">www.crigroups.com</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
