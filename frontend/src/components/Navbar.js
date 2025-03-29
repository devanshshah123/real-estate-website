import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../styles/Navbar.css"; // Importing Navbar styles

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand">Real Estate</a>
          <div>
            {/* Hamburger button (only visible on mobile) */}
            <button className="menu-btn d-lg-none" onClick={() => setSideNavOpen(true)}>
              <FaBars size={24} />
            </button>
            {/* Desktop Navigation */}
            <ul className="nav d-none d-lg-flex">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
              <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Side Navbar (Only for mobile) */}
      <div className={`side-nav ${sideNavOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSideNavOpen(false)}>
          <FaTimes size={24} />
        </button>
        <ul className="nav flex-column">
          <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setSideNavOpen(false)}>Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link" onClick={() => setSideNavOpen(false)}>About</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link" onClick={() => setSideNavOpen(false)}>Services</Link></li>
          <li className="nav-item"><Link to="/projects" className="nav-link" onClick={() => setSideNavOpen(false)}>Projects</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link" onClick={() => setSideNavOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
