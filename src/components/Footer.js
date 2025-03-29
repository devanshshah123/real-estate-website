import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Contact Info */}
      <div className="footer-top">
        <div className="footer-top-content">
          {/* <img src={logo} alt="DGS Group Logo" className="footer-logo" /> */}
          <div className="footer-info">
            <div className="footer-location">
              <span className="footer-icon">📍</span>
              <div>
                <h3>DGS House</h3>
                <p>DGS House, 1st Floor, Sheetal Krupa, Aarey Road, Walawalkar Street, Goregaon (E), Mumbai – 400063</p>
              </div>
            </div>
            <div className="footer-phone">
              <span className="footer-icon">📞</span>
              <div>
                <h3>Business Phone</h3>
                <p>+91 91364 31541 / +91 91364 41541</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="footer-middle">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About DGS</a></li>
              <li><a href="#">Life with DGS</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Other Links</h4>
            <ul>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Channel Partners</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Projects</h4>
            <ul>
              <li><a href="#">Featured Projects</a></li>
              <li><a href="#">Ongoing Projects</a></li>
              <li><a href="#">Completed Projects</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">FACEBOOK</a></li>
              <li><a href="#">INSTAGRAM</a></li>
              <li><a href="#">YOUTUBE</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Important Links</h4>
            <ul>
              <li><a href="#">PRIVACY POLICY</a></li>
              <li><a href="#">TERMS & CONDITIONS</a></li>
              <li><a href="#">DISCLAIMER</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <p>© 2025 DGS Group | All Rights Reserved</p>
        <p className="footer-developer">Website by DigiNexa</p>
        {/* <img src={logo} alt="DGS Group Small Logo" className="footer-small-logo" /> */}
      </div>
    </footer>
  );
};

export default Footer;
