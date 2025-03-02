import React from "react";
import { Row, Col } from "antd";
import "./landing-page.css";
import { FaWhatsapp, FaInstagram, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="child">
          <Row>
            <Col md={4} className="image-col">
              <img
                src="/photos/icon1.png"
                alt="landing page icon"
                className="small-image"
              />
            </Col>
            <Col md={16}>
              <div className="landing_mid">
                <img
                  src="/photos/landing-page-img.png"
                  alt="landing page image"
                  className="image_one"
                />
              </div>
            </Col>
            <Col md={4} className="image-col">
              <img
                src="/photos/icon2.png"
                alt="landing page icon"
                className="small image"
              />
            </Col>
          </Row>
        </div>
        <div className="social">
      <div className="social-links">
        <h1 className="heading1">Let's Connect Via</h1>
        <div className="icons">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon whatsapp" />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="social-icon twitter" />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FaEnvelope className="social-icon gmail" />
          </a>
          <a href="https://www.tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-icon tiktok" />
          </a>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default LandingPage;
