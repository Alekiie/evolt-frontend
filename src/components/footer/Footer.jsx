import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container bg-black text-white">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <MdOutlineEmail className="footer-icon" />
              <span>email@example.com</span>
            </li>
            <li>
              <IoCallOutline className="footer-icon" />
              <span>+123 456 7890</span>
            </li>
            <li>
              <MdOutlineLocationOn className="footer-icon" />
              <span>123 Main Street, City, Country</span>
            </li>
          </ul>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <h6 className="footer-icon">
              <FaXTwitter />
            </h6>
            <h6 className="footer-icon">
              <FaInstagram />
            </h6>
            <h6 className="footer-icon">
              <IoLogoLinkedin />
            </h6>
          </div>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul className="links-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul className="links-list">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul className="links-list">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
