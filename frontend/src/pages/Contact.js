import { useState, useEffect } from "react";
import "../styles/Contact.css";
import banner from "../assets/contact.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,// If no phone field, use a default value
          message: formData.message
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "", phone: "" });
        setErrors({});
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <img src={banner} alt="Contact Banner" className="hero-background" />
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        {/* Left: Contact Form */}
        <div className="contact-form-container">
          <h2 className="form-title">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-input ${errors.firstName ? "error-border" : ""}`}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-input ${errors.lastName ? "error-border" : ""}`}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                className={`form-input ${errors.email ? "error-border" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>phone</label>
              <input
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
               />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                className={`form-input ${errors.message ? "error-border" : ""}`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Information Section */}
        <div className="contact-info">
          <h2>How Can We Help?</h2>
          <p>Please select a topic related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
          <ul>
            <li><strong>Book a Demo</strong> - Request a demo from one of our conversion specialists.</li>
            <li><strong>Get Inspired</strong> - Discover the many ways our customers use our services.</li>
            <li><strong>Become a Partner</strong> - Join our Partner Program and earn 25% recurring commissions.</li>
          </ul>
          <div className="trusted-by">
            <p>TRUSTED BY</p>
            <div className="brands">
              {/* Add brand logos here */}
              <span>Hummel</span>
              <span>Silvan</span>
              <span>Coop</span>
              <span>Nordea</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
