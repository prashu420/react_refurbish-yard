import React from 'react';
// import { Container, Carousel } from 'react-bootstrap';
import './About.css';

// Import your brand logos

function About() {
  return (
    <div className="container mt-5 about-page"> {/* Add a class to the container */}
      <h2 className="text-center mb-4">WHY YOU SHOULD CHOOSE REFURBISH YARD?</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">18+ YEARS OF EXPERTISE</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">TRAINED & SKILLED TECHNICIANS</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">100% GENUINE SPARE PARTS</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">6 MONTHS SERVICE & 12 MONTHS SPARES WARRANTY</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">FREE PICKUP & DELIVERY</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">BRAND SOP & ESD COMPLAINT</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">BEST SERVICE & PRICE GUARANTEED</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/image--v2.png" alt="" className="mb-3" />
              <h5 className="card-title">INSTANT SMS UPDATE & INVOICE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 