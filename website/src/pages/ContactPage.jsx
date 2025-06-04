import React, { useState } from 'react';
import Header from '../components/Header';

const ContactPage = ({ 
  getTotalItems,
  setShowCart,
  scrollToTop,
  scrollToProducts,
  scrollToAbout,
  cart,
  getTotalPrice,
  onSearch,
  searchTerm,
  categories = []
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here later
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <Header 
        getTotalItems={getTotalItems}
        setShowCart={setShowCart}
        scrollToTop={scrollToTop}
        scrollToProducts={scrollToProducts}
        scrollToAbout={scrollToAbout}
        cart={cart}
        getTotalPrice={getTotalPrice}
        onSearch={onSearch}
        categories={categories}
      />
      
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <nav className="breadcrumb">
            <button onClick={() => window.location.href = '/'} className="breadcrumb-link">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact</span>
          </nav>
        </div>
      </div>

      <main className="contact-main">
        <div className="container">
          <div className="contact-header-section">
            <h1 className="contact-page-title">Get In Touch</h1>
            <p className="contact-description">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="contact-content-layout">
            {/* Contact Form */}
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Contact Information</h3>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">📧</div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>hello@phonestrapco.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📱</div>
                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div className="contact-info-content">
                    <h4>Address</h4>
                    <p>123 Design Street<br />Creative District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">🕒</div>
                  <div className="contact-info-content">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="contact-faq-section">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <div className="faq-item">
                  <h4>Do you offer international shipping?</h4>
                  <p>Yes, we ship worldwide with tracking and insurance included.</p>
                </div>
                <div className="faq-item">
                  <h4>What materials are your straps made from?</h4>
                  <p>We use premium materials including genuine leather, high-quality beads, and durable metal chains.</p>
                </div>
                <div className="faq-item">
                  <h4>Can I customize my phone strap?</h4>
                  <p>Absolutely! Check out our custom collection or contact us for personalized designs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer spacer */}
      <div className="page-footer-spacer"></div>
    </div>
  );
};

export default ContactPage; 