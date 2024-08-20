import React, { useEffect } from 'react';
import './Services.css';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceImage from '../assets/images/service-image.svg'; // Import the SVG file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services">
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="services-title" data-aos="fade-up">RENTAL SERVICES</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="services-text">
            <div className="service-item" data-aos="fade-right">
              <div className="icon-circle">🖥️</div>
              <p>WE ARE INTO REFURBISH - OLD PC AND LAPTOPS</p>
            </div>
            <div className="service-item" data-aos="fade-right" data-aos-delay="200">
              <div className="icon-circle">🔧</div>
              <p>REPAIRING SERVICE</p>
            </div>
            <div className="service-item" data-aos="fade-right" data-aos-delay="400">
              <div className="icon-circle">💻</div>
              <p>RENTING THE SYSTEM</p>
            </div>
          </Col>
          <Col xs={12} md={6} className="services-image" data-aos="fade-left">
            <img src={ServiceImage} alt="Service Illustration" className="img-fluid svg-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
