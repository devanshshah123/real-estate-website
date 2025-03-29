import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import banner from "../assets/video.mp4";
import luxuryHome from "../assets/img1.jpg";
import modernBuilding from "../assets/img1.jpg";
import Navbar from "../components/Navbar";
import AboutUs from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "../components/Footer";
import "../styles/About.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projectdata";
import "../styles/ProjectDetails.css";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const id  = 1;
    const property = projects.find((p) => p.id === parseInt(id));

    if (!property) return <h2>Property not found</h2>;
    return (
        <div>
            <Navbar />

            <section className="hero">
                <video autoPlay loop muted className="hero-video">
                    <source src={banner} type="video/mp4" />
                </video>
                <div className="hero-overlay">
                    <h1>CREATING LANDMARKS</h1>
                    <p>Building iconic spaces that define luxury living.</p>
                    <button className="btn btn-dark">Explore More</button>
                </div>
            </section>

            <ul className="details-list" style={{ paddingTop: "1rem" }}>
                    <li><strong>Location:</strong> {property.location}</li>
                    <li><strong>Rooms:</strong> {property.rooms}</li>
                    <li><strong>Status:</strong> {property.status}</li>
                    <li><strong>Price:</strong> {property.price}</li>
                    <li><strong>Area:</strong> {property.area}</li>
                    <li><strong>Floor:</strong> {property.floor}</li>
                </ul>

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

            <div className="property-gallery">
                    {property.gallery.map((img, index) => (
                        <img key={index} src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    ))}
            </div>

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

            <div className="property-gallery">
                    {property.gallery.map((img, index) => (
                        <img key={index} src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    ))}
            </div>

            <Footer />
        </div>
    );
};

export default Home;

