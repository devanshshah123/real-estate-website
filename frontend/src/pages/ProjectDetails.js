import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projectdata";
import "../styles/ProjectDetails.css";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ProjectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const property = projects.find((p) => p.id === parseInt(id));

    if (!property) return <h2>Property not found</h2>;

    return (
        <div className="property-details-page">
            {/* Hero Section */}
            <div className="property-hero" style={{ backgroundImage: `url(${property.image})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-text">
                    <h1>{property.title}</h1>
                    <h3>{property.location}</h3>
                </div>
            </div>

            {/* Overview */}
            <div className="property-container">
                <h2>Property Overview</h2>
                <p>{property.description}</p>

                {/* Image Gallery */}
                <div className="property-gallery">
                    {property.gallery.map((img, index) => (
                        <img key={index} src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    ))}
                </div>

                {/* Property Details */}
                <h2>Property Details</h2>
                <ul className="details-list">
                    <li><strong>Location:</strong> {property.location}</li>
                    <li><strong>Rooms:</strong> {property.rooms}</li>
                    <li><strong>Status:</strong> {property.status}</li>
                    <li><strong>Price:</strong> {property.price}</li>
                    <li><strong>Area:</strong> {property.area}</li>
                    <li><strong>Floor:</strong> {property.floor}</li>
                </ul>

                {/* Amenities */}
                <h2>Amenities</h2>
                <ul className="amenities-list">
                    {property.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>

                {/* Security & Parking */}
                <h2>Security & Parking</h2>
                <p><strong>Security:</strong> {property.security}</p>
                <p><strong>Parking:</strong> {property.parking}</p>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
