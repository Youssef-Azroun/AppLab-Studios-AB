import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaCalculator } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const { invoiceData } = location.state || {};
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Get language context
  let lang;
  try {
    const context = useLanguage();
    lang = context.lang;
  } catch (error) {
    console.error("Language context error in Contact:", error);
    // Fallback to default values
    lang = {
      priceEstimateTitle: "Your Project Estimate",
      priceEstimateNote: "This is an estimated price based on your requirements. The final price may vary depending on detailed specifications.",
      priceBreakdownTitle: "Price Breakdown",
      priceTotal: "Total Estimate",
      contactFormTitle: "Contact Information",
      contactFormName: "Name",
      contactFormEmail: "Email",
      contactFormMessage: "Message",
      contactFormSubmit: "Send Message",
      pricePlatformWebsite: "Website",
      pricePlatformIos: "iOS",
      pricePlatformAndroid: "Android",
      pricePlatformBoth: "Both",
      pricePlatformAll: "All",
      priceFeatureAuth: "Authentication",
      priceFeaturePayment: "Payment",
      priceFeatureAdmin: "Admin",
      priceFeatureMedia: "Media",
      priceFeatureSearch: "Search",
      priceFeatureMultilingual: "Multilingual",
      priceFeatureChat: "Chat",
      priceFeatureAnalytics: "Analytics",
      priceDesignBasic: "Basic",
      priceDesignCustom: "Custom",
      priceDesignPremium: "Premium",
      priceTimelineStandardFactor: "Standard",
      priceTimelineFastFactor: "Fast",
      priceTimelineUrgentFactor: "Urgent"
    };
  }

  // Define label mappings at component level
  const platformLabels = {
    'website': lang.pricePlatformWebsite,
    'ios': lang.pricePlatformIos,
    'android': lang.pricePlatformAndroid,
    'both': lang.pricePlatformBoth,
    'all': lang.pricePlatformAll
  };

  const featureLabels = {
    'auth': lang.priceFeatureAuth,
    'payment': lang.priceFeaturePayment,
    'admin': lang.priceFeatureAdmin,
    'media': lang.priceFeatureMedia,
    'search': lang.priceFeatureSearch,
    'multilingual': lang.priceFeatureMultilingual,
    'chat': lang.priceFeatureChat,
    'analytics': lang.priceFeatureAnalytics
  };

  const designLabels = {
    'basic': lang.priceDesignBasic,
    'custom': lang.priceDesignCustom,
    'premium': lang.priceDesignPremium
  };

  const timelineFactors = {
    'standard': lang.priceTimelineStandardFactor,
    'fast': lang.priceTimelineFastFactor,
    'urgent': lang.priceTimelineUrgentFactor
  };

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
  };

  const renderPriceBreakdown = () => {
    if (!invoiceData) return null;

    const platformCosts = {
      'website': 15000,
      'ios': 20000,
      'android': 20000,
      'both': 30000,
      'all': 40000
    };

    const featureCosts = {
      'auth': 5000,
      'payment': 8000,
      'admin': 10000,
      'media': 7000,
      'search': 6000,
      'multilingual': 8000,
      'chat': 12000,
      'analytics': 9000
    };

    const designCosts = {
      'basic': 0,
      'custom': 10000,
      'premium': 20000
    };

    const sizeMultipliers = {
      'small': 1,
      'medium': 1.5,
      'large': 2
    };

    const platformWithSize = platformCosts[invoiceData.platform] * sizeMultipliers[invoiceData.size];

    return (
      <>
        <div className="breakdown-item">
          <span>{platformLabels[invoiceData.platform]}</span>
          <span>{platformWithSize.toLocaleString()} SEK</span>
        </div>
        
        {invoiceData.features.map(feature => (
          <div className="breakdown-item" key={feature}>
            <span>{featureLabels[feature]}</span>
            <span>{featureCosts[feature].toLocaleString()} SEK</span>
          </div>
        ))}
        
        <div className="breakdown-item">
          <span>{designLabels[invoiceData.design]}</span>
          <span>{designCosts[invoiceData.design].toLocaleString()} SEK</span>
        </div>
        
        {(invoiceData.timeline === 'fast' || invoiceData.timeline === 'urgent') && (
          <div className="breakdown-item">
            <span>{timelineFactors[invoiceData.timeline]}</span>
            <span>{invoiceData.timeline === 'fast' ? '+20%' : '+50%'}</span>
          </div>
        )}
        
        <div className="breakdown-item total">
          <span>{lang.priceTotal}</span>
          <span>{invoiceData.price.toLocaleString()} SEK</span>
        </div>
      </>
    );
  };

  return (
    <div className="prices">
      <div className={`price-result animate-on-scroll visible`}>
        <div className="contact-form-section">
          <h3>{lang.contactFormTitle}</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{lang.contactFormName}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{lang.contactFormEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{lang.contactFormMessage}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              {lang.contactFormSubmit}
            </button>
          </form>
        </div>
        
        <div className="result-header">
          <FaCalculator className="result-icon" />
          <h1>{lang.priceEstimateTitle}</h1>
          <div className="platform-badge">
            {invoiceData && platformLabels[invoiceData.platform]}
          </div>
        </div>
        
        <div className="price-display">
          <span className="price-amount">{invoiceData?.price.toLocaleString()}</span>
          <span className="price-currency">SEK</span>
        </div>
        
        <p className="price-note">{lang.priceEstimateNote}</p>
        
        <div className="breakdown-container">
          <h3>{lang.priceBreakdownTitle}</h3>
          {renderPriceBreakdown()}
        </div>
      </div>
    </div>
  );
};

export default Contact; 