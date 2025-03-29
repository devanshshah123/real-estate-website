import "../styles/Services.css";
import banner from "../assets/services.jpg"; // Add a relevant banner image
import Footer from "../components/Footer";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      id: 1,
      title: "Property Buying",
      icon: "🏡",
      description: "Find your dream home with our expert agents.",
      // image: "property-buying.jpg"
    },
    {
      id: 2,
      title: "Property Selling",
      icon: "💰",
      description: "Sell your property at the best market price with ease.",
      // image: "property-selling.jpg"
    },
    {
      id: 3,
      title: "Rental Services",
      icon: "🏢",
      description: "Find rental properties that fit your budget and lifestyle.",
      // image: "rental-services.jpg"
    },
    {
      id: 4,
      title: "Investment Consulting",
      icon: "📈",
      description: "Get expert guidance to make profitable real estate investments.",
      // image: "investment-consulting.jpg"
    },
    {
      id: 5,
      title: "Legal Assistance",
      icon: "⚖️",
      description: "Navigate legal complexities in property transactions with our experts.",
      // image: "legal-assistance.jpg"
    },
    {
      id: 6,
      title: "Home Loan Assistance",
      icon: "🏦",
      description: "Get the best home loan deals with easy approval processes.",
      // image: "home-loan.jpg"
    },
    {
      id: 7,
      title: "Interior Design & Renovation",
      icon: "🎨",
      description: "Transform your space with expert interior design and renovation services.",
      // image: "interior-design.jpg"
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="overlay"></div>
        <img src={banner} alt="Services Banner" className="hero-background" />
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>We provide comprehensive real estate solutions to meet all your needs.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="services-content">
        <h2 className="section-title">What We Offer</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* <img src={require(`../assets/${service.image}`)} alt={service.title} className="service-image" /> */}
              <div className="service-details">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
