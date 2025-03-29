import "../styles/About.css";
import founder from "../assets/founder.jpg";
import luxuryHome from "../assets/img1.jpg";
import modernBuilding from "../assets/img1.jpg";
import qualityLiving from "../assets/img2.jpg";
import greenBuilding from "../assets/img3.jpg";
import Footer from "../components/Footer";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="container text-center">
          <h1>OVERVIEW</h1>
          <p>
            DGS Group consistently delivers architectural landmarks that redefine Mumbai’s skyline.
            Trust the efficiency of the DGS team to construct enduring, excellent structures that enhance Mumbai’s allure.DGS Group consistently delivers architectural landmarks that redefine Mumbai’s skyline.
            Trust the efficiency of the DGS team to construct enduring, excellent structures that enhance Mumbai’s allure.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="row story-container">
            {/* Text Section */}
            <div className="col-lg-6 story-box">
              <h2>FROM HUMBLE BEGINNINGS TO TOWERING SUCCESS</h2>
              <p>
                From a humble one-room office in 1985, DGS Group has grown into a leading real estate
                developer, bringing innovation, sustainability, and excellence to every project.
              </p>
              <button className="btn btn-dark">Join Our Journey</button>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 story-box text-center">
              <img src={founder} alt="Founder" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      {/* <section className="about-stats">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 stat-box">
              <h3>16+</h3>
              <p>Years of Trust</p>
            </div>
            <div className="col-md-3 stat-box">
              <h3>3K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="col-md-3 stat-box">
              <h3>36 LACS</h3>
              <p>Sq.ft. Developed</p>
            </div>
            <div className="col-md-3 stat-box">
              <h3>22 LACS</h3>
              <p>Sq.ft. Evolving</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Affordable Luxury Section */}
      <section className="affordable-luxury">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={luxuryHome} alt="Luxury Home" className="img-fluid rounded shadow" />
            </div>
            <div className="col-lg-6">
              <h2>AFFORDABLE LUXURY</h2>
              <p>
                DGS Group's promise is to consistently redefine affordable housing while maintaining
                the highest quality standards. Our homes blend elegance, comfort, and affordability.
              </p>
              <button className="btn btn-dark">Discover Our Mission</button>
            </div>
          </div>
        </div>
      </section>

      {/* Setting Standards Section */}
      <section className="setting-standards">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>SETTING STANDARDS IN REAL ESTATE</h2>
              <p>
                Our vision is to build homes that offer the highest level of excellence and comfort.
                We emphasize modern architecture, quality materials, and sustainable development.
              </p>
              <button className="btn btn-dark">Join Our Mission</button>
            </div>
            <div className="col-lg-6">
              <img src={modernBuilding} alt="Modern Building" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container text-center">
          <h2>WHY CHOOSE US?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="why-card">
                <img src={qualityLiving} alt="Quality Living" className="img-fluid rounded" />
                <div className="card-content">
                  <h4>Quality Living</h4>
                  <p>We build homes designed for comfort, elegance, and lasting value.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-card">
                <img src={greenBuilding} alt="Sustainable Development" className="img-fluid rounded" />
                <div className="card-content">
                  <h4>Sustainable Development</h4>
                  <p>Our eco-friendly projects prioritize energy efficiency and green spaces.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-card">
                <img src={modernBuilding} alt="Innovative Designs" className="img-fluid rounded" />
                <div className="card-content">
                  <h4>Innovative Designs</h4>
                  <p>We push the boundaries of architecture to create unique, modern homes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
