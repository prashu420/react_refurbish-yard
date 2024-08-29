import React from 'react';
import './contact.css';  // Make sure to create and link this CSS file

const Contact = () => {
    return (
        <footer className="contact-section">
            

            <div className="contact-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-logo">
                            <img src={require('../assets/images/logo.png')} alt="Logo" className="logo-img" />
                                <h4> Tech Refurbish Yard</h4>
                                <p>Reach us at</p>
                                <p>No. 417/1, 4th B Cross, Ramamurthy Nagar, Bengaluru - 560016</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <h5>Home</h5>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#brands">Brands</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#branches">Branches</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#nearme">Near Me</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h5>Laptop Services</h5>
                            <ul>
                                <li>Screen Replacement</li>
                                <li>SSD Upgrade</li>
                                <li>Fan Issues</li>
                                <li>RAM Upgrade</li>
                                <li>Touchpad Issues</li>
                                <li>Motherboard Issues</li>
                                <li>Display Errors</li>
                                <li>Keyboard Problems</li>
                                <li>Hinges Replacement</li>
                                <li>Sound Issues</li>
                                <li>Battery Issues</li>
                                <li>Software Installation</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h5>Contact</h5>
                            <ul>
                                <li>Phone: +91 7760097778, 8460388974</li>
                             
                                <li>Landline-08035827097</li>
                                <li>Email: refurbishyard@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
