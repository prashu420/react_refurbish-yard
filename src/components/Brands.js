import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './Brands.css';

// Import your brand logos
import appleLogo from '../assets/images/apple-logo.png';
import lenovoLogo from '../assets/images/lenovo-logo.png';
import asusLogo from '../assets/images/asus-logo.png';
import dellLogo from '../assets/images/dell-logo.png';
import hpLogo from '../assets/images/hp-logo.png';
import acerLogo from '../assets/images/acer-logo.png';
import samsungLogo from '../assets/images/samsung-logo.png';

function Brands() {
  return (
    <section className="brands">
      <Container fluid className="text-center">
        <h2 className="brands-title">EXCLUSIVE LAPTOP REPAIR SERVICE CENTER FOR BELOW BRANDS</h2>
        <Carousel
          indicators={false}
          controls={true}
          className="brands-carousel"
          interval={3000}
        >
          <Carousel.Item>
            <div className="brands-wrapper">
              <div className="brand-item">
                <img src={appleLogo} alt="Apple" className="brand-logo" />
              </div>
              <div className="brand-item">
                <img src={lenovoLogo} alt="Lenovo" className="brand-logo" />
              </div>
              <div className="brand-item">
                <img src={asusLogo} alt="Asus" className="brand-logo" />
              </div>
              <div className="brand-item">
                <img src={dellLogo} alt="Dell" className="brand-logo" />
              </div>
              <div className="brand-item">
                <img src={hpLogo} alt="HP" className="brand-logo" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="brands-wrapper">
              <div className="brand-item">
                <img src={acerLogo} alt="Acer" className="brand-logo" />
              </div>
              <div className="brand-item">
                <img src={samsungLogo} alt="Samsung" className="brand-logo" />
              </div>
              {/* Add more logos as needed */}
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Brands;
