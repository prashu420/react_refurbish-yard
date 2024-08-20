import React, { useState } from 'react';
import './NearMe.css';
import serviceVideo from '../assets/images/service.mp4'; 
import { FaLaptop, FaMemory, FaMousePointer, FaKeyboard, FaHdd, FaFan, FaMicrochip, FaTv, FaUsers, FaTools, FaMapMarkerAlt, FaUser } from 'react-icons/fa'; 
import serviceVideo1 from '../assets/images/service1.mp4';
import screenshotImage from '../assets/images/refurbishpic.jpg';

const NearMe = () => {
    const [showMore, setShowMore] = useState(false);
    const [open, setOpen] = useState(null);

    const handleButtonClick = () => {
        setShowMore(!showMore);
    };

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const featuresLeft = [
        { name: "Laptop Screen Replacement", icon: <FaLaptop /> },
        { name: "RAM Upgrade Services", icon: <FaMemory /> },
        { name: "Touchpad Problems", icon: <FaMousePointer /> },
        { name: "Keyboard Problems", icon: <FaKeyboard /> }
    ];

    const featuresRight = [
        { name: "SSD Upgrade Services", icon: <FaHdd /> },
        { name: "Fan Issues", icon: <FaFan /> },
        { name: "Motherboard", icon: <FaMicrochip /> },
        { name: "Display Errors", icon: <FaTv /> }
    ];

    const refurbishNumbers = [
        { icon: <FaLaptop />, number: "1,61,500+", label: "Laptops Repaired" },
        { icon: <FaUsers />, number: "1,26,500+", label: "Customers Served" },
        { icon: <FaTools />, number: "2,02,300+", label: "Accessories Sold" },
        { icon: <FaMapMarkerAlt />, number: "4 Centers", label: "in India" },
    ];

    const moreDesktops = [
        { name: "Dell Latitude 5480", description: "Refurbished Dell Latitude 5480 with Intel Core i7 7th Gen/16GB/512GB SSD/Windows 10", price: "INR 25,000" },
        { name: "HP EliteBook 840", description: "HP EliteBook 840 G3 (Refurbished) with Intel Core i5 6th Gen/8GB/256GB SSD/Windows 10", price: "INR 22,000" },
        { name: "Lenovo ThinkPad X260", description: "Lenovo ThinkPad X260 (Refurbished) with Intel Core i5 6th Gen/8GB/256GB SSD/Windows 10", price: "INR 20,000" }
    ];

    const faqs = [
        {
            question: "Can a laptop keyboard be repaired?",
            answer:
                "Yes, laptop keyboards can be repaired depending on the issue. In some cases, individual keys or keypads can be replaced, while in others, the entire keyboard might need replacing.",
        },
        {
            question: "How do I unfreeze my keyboard?",
            answer:
                "To unfreeze your keyboard, try rebooting your computer or reconnecting the keyboard. If it still doesn't work, check for software or driver issues that might be causing the freeze.",
        },
        {
            question: "In which cities does Refurbish operate?",
            answer:
                "Refurbish operates in several cities, including New York, Los Angeles, Chicago, Houston, and Miami. Check our website for the complete list of service areas.",
        },
        {
            question: "What kind of parts do you use for repairs?",
            answer:
                "We use high-quality, OEM (Original Equipment Manufacturer) parts for repairs to ensure your device performs like new after service.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept all major credit cards, debit cards, and online payment methods like PayPal and Google Pay.",
        },
        {
            question: "How long until I get my laptop back?",
            answer:
                "The repair time varies based on the issue, but most repairs are completed within 3-5 business days. We also offer expedited services for urgent repairs.",
        },
    ];

    return (
        <div className="nearme-container">
            <h1 className="heading">Laptop Repair Services Near You</h1>
            <div className="content-container">
                <div className="features">
                    {featuresLeft.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="icon">{feature.icon}</div>
                            <div className="feature-text">{feature.name}</div>
                        </div>
                    ))}
                </div>

                <div className="video-container">
                    <video controls autoPlay loop muted width="100%" className="rounded-video">
                        <source src={serviceVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="features">
                    {featuresRight.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="icon">{feature.icon}</div>
                            <div className="feature-text">{feature.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="refurbish-section container">
      <h2 className="refurbish-heading text-center">Refurbish Numbers</h2>
      <div className="row refurbish-stats">
        {refurbishNumbers.map((stat, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="stat-box text-center">
              <div className="stat-icon mb-3">{stat.icon}</div>
              <div className="stat-number display-4">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

            <div className="repair-section">
                <h2 className="repair-heading">
                    Looking to Get Your <span>Laptop Repaired</span> at Home?
                </h2>
                <div className="repair-content">
                    <div className="repair-text">
                        <p>
                            Quick, safe, and guaranteed laptop repair services at home in Bengaluru. No outsourcing to third parties. 
                            Directly done by our trained, experienced technicians, which comes with 6 months service warranty and 
                            12 months spare warranty.
                        </p>
                    </div>
                    <div className="repair-video-container">
                        <video controls autoPlay loop muted width="100%" className="rounded-video">
                            <source src={serviceVideo1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            <div className="refurbished-container">
                <h2 className="refurbished-heading">Refurbished laptops: Tested and with Warranty</h2>
                <div className="refurbished-content">
                    <div className="refurbished-text">
                        <p>Dell Latitude 5470 (Refurbished)</p>
                        <p>Refurbished Dell Latitude E5470 14 Inches Laptop (Intel Core i5 6th Gen/8Gb/256 Gb SSD/Windows 10/MS Office/Integrated Graphics), INR 18,500</p>
                        <button className="refurbished-button" onClick={handleButtonClick}>
                            Check out all the refurbished laptops
                        </button>
                        <div className={showMore ? 'visible-list' : 'hidden-list'}>
                            {moreDesktops.map((desktop, index) => (
                                <div key={index} className="list-item">
                                    <h3>{desktop.name}</h3>
                                    <p>{desktop.description}</p>
                                    <p><strong>{desktop.price}</strong></p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="refurbished-image">
                        <img src={screenshotImage} alt="Refurbished Laptop" className="screenshot-image" />
                    </div>
                </div>
            </div>

            <section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-heading">TESTIMONIAL</h2>
        <p className="testimonial-subheading">What Our Customers Say</p>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="profile-logo">
              <FaUser />
            </div>
            <p className="testimonial-author">Ahmed Elsayed</p>
            <p className="testimonial-text">
              "I brought my laptop in for a repair, and the service was excellent. The team was professional, kept me updated throughout, and returned my laptop in perfect working condition. Highly recommend their repair services!"
            </p>
          </div>
          <div className="testimonial-card">
            <div className="profile-logo">
              <FaUser />
            </div>
            <p className="testimonial-author">Sara Johnson</p>
            <p className="testimonial-text">
              "I recently purchased a refurbished laptop from Refurbish Yard, and I couldn't be happier. The laptop works like new, and I saved a lot of money compared to buying a brand-new one. Fantastic quality and service!"
            </p>
          </div>
          <div className="testimonial-card">
            <div className="profile-logo">
              <FaUser />
            </div>
            <p className="testimonial-author">James Carter</p>
            <p className="testimonial-text">
              "Their home service was top-notch. The technician arrived on time, diagnosed the issue quickly, and had my laptop running smoothly again within the hour. I'm impressed by their efficiency and professionalism."
            </p>
          </div>
        </div>
      </div>
    </section>
            <div className="faq-section">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                       <div key={index} className="faq-item">
                       <button className="faq-question" onClick={() => handleToggle(index)}>
                           {faq.question}
                       </button>
                       <div className={`faq-answer ${open === index ? 'open' : ''}`}>
                           <p>{faq.answer}</p>
                       </div>
                   </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NearMe;
