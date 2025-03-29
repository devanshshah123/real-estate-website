import React, { useState } from "react";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import projects from "../data/projectdata";
import "../styles/Projects.css";
import banner from "../assets/aboutus.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // State for filters
  const [filters, setFilters] = useState({
    location: "All",
    price: "All",
    rooms: "All",
    status: "All",
  });

  // Get unique locations, prices, and room types from project data
  const uniqueLocations = ["All", ...new Set(projects.map((p) => p.location))];
  const uniquePrices = ["All", ...new Set(projects.map((p) => p.price))];
  const uniqueRooms = ["All", "3BHK, 4BHK", "2BHK, 3BHK", "1BHK, 2BHK"];

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter projects based on selected filters
  const filteredProjects = projects.filter((project) => {
    return (
      (filters.location === "All" || project.location === filters.location) &&
      (filters.price === "All" || project.price === filters.price) &&
      (filters.rooms === "All" || project.rooms === filters.rooms) &&
      (filters.status === "All" || project.status === filters.status)
    );
  });

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="overlay"></div>
        <img src={banner} alt="Mumbai Skyline" className="hero-background" />
        <div className="hero-content">
          <h3 className="hero-subtitle">OUR PROJECTS</h3>
          <h1 className="hero-title">
            REDEFINING <br />
            <span>MUMBAI'S SKYLINE</span>
          </h1>
          <p className="hero-description">
            We at DGS Group have been committed to constructing Architectural Landmarks that redefine Mumbai’s Skyline.
          </p>
        </div>
      </section>

      {/* Featured Projects Title */}
      <div className="featured-projects">
        <p>Featured Projects</p>
      </div>

      {/* Filters Section */}
      <div className="filters">
        {/* Location Filter */}
        <select name="location" value={filters.location} onChange={handleFilterChange}>
          <option value="All" disabled>Select Location</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Price Range Filter */}
        <select name="price" value={filters.price} onChange={handleFilterChange}>
          <option value="All" disabled>Select Price Range</option>
          {uniquePrices.map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>

        {/* Rooms Filter (Dropdown) */}
        <select name="rooms" value={filters.rooms} onChange={handleFilterChange}>
          <option value="All" disabled>Select Rooms</option>
          {uniqueRooms.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="All" disabled>Project Status</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">
                  <FaMapMarkerAlt className="icon" /> {project.location}
                </p>
                <p className="project-rooms">
                  <FaHome className="icon" /> {project.rooms}
                </p>
                <p className="project-description">{project.description}</p>
                <p className="project-price">Price: <strong>{project.price}</strong></p>
                <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
                <button className="view-details-btn">
                  <Link to={`/projects/${project.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No projects match your filters.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
