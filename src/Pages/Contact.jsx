import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaCalculator, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const { invoiceData } = location.state || {};
  const form = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      priceTimelineUrgentFactor: "Urgent",
      pricePaymentOptionsFull: "Full Payment",
      pricePaymentOptionsSubscription: "Monthly Subscription",
      priceSubscriptionTerm: "Subscription Term",
      priceSubscriptionCommitment: "12 months minimum commitment",
      priceMonthlySubscription: "Monthly Subscription Payment",
      priceMonthlyPlatformFee: "Monthly Platform Fee",
      priceMonthlyFeeWithCommission: "Monthly Fee (including 20% commission)",
      priceMonthlyFeeBreakdown: "Monthly Fee Breakdown:",
      pricePlatformMaintenance: "Platform Maintenance:",
      priceCommission: "Commission (20%):",
      priceTotalMonthlyCost: "Total Monthly Cost (Subscription + Platform Fee)"
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
    setLoading(true);
    setError(null);
    
    // Prepare additional information from invoice data
    let additionalInfo = '';
    if (invoiceData) {
      // Determine primary price display based on payment option
      const paymentInfo = invoiceData.paymentOption === 'full' 
        ? `Estimated Price: ${invoiceData.price.toLocaleString()} SEK (${lang.pricePaymentOptionsFull})` 
        : `Monthly Subscription: ${invoiceData.monthlyPayment.toLocaleString()} SEK/month (${lang.priceSubscriptionCommitment})`;
      
      additionalInfo = `
Platform: ${platformLabels[invoiceData.platform]}
Size: ${invoiceData.size}
Features: ${invoiceData.features.map(f => featureLabels[f]).join(', ')}
Design: ${designLabels[invoiceData.design]}
Timeline: ${timelineFactors[invoiceData.timeline]}
${paymentInfo}

${lang.priceMonthlyFeeBreakdown}
${lang.pricePlatformMaintenance} ${invoiceData.monthlyFeeBreakdown.platformMaintenance.toLocaleString()} SEK
${Object.entries(invoiceData.monthlyFeeBreakdown.features).map(([feature, data]) => 
  `${data.label}: ${data.cost.toLocaleString()} SEK`
).join('\n')}
${lang.priceCommission} ${invoiceData.monthlyFeeBreakdown.commission.toLocaleString()} SEK
Total Monthly Fee: ${invoiceData.monthlyFeeBreakdown.total.toLocaleString()} SEK
      `;
    }
    
    // Send email using EmailJS to first template
    emailjs.sendForm(
      'service_n7pw6le',
      'template_v90w3vs',
      form.current,
      '2IvRj9KXG23N0kkUR'
    )
    .then((result) => {
      console.log('Email sent successfully to first template:', result.text);
      
      // Now send to the second template
      return emailjs.sendForm(
        'service_n7pw6le',
        'template_00u3vym',
        form.current,
        '2IvRj9KXG23N0kkUR'
      );
    })
    .then((result) => {
      console.log('Email sent successfully to second template:', result.text);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setError('Failed to send email. Please try again later.');
      setLoading(false);
    });
  };

  const renderPriceBreakdown = () => {
    if (!invoiceData) return null;

    const platformCosts = {
      'website': 7500,
      'ios': 10000,
      'android': 10000,
      'both': 15000,
      'all': 20000
    };

    const featureCosts = {
      'auth': 2500,
      'payment': 4000,
      'admin': 5000,
      'media': 3500,
      'search': 3000,
      'multilingual': 4000,
      'chat': 6000,
      'analytics': 4500
    };

    const designCosts = {
      'basic': 0,
      'custom': 5000,
      'premium': 10000
    };

    const sizeMultipliers = {
      'small': 1,
      'medium': 1.5,
      'large': 2
    };

    const platformWithSize = platformCosts[invoiceData.platform] * sizeMultipliers[invoiceData.size];
    
    // Calculate monthly costs if subscription selected
    const leaseDuration = invoiceData.leaseDuration || 12;
    const getMonthlyAmount = (amount) => Math.round(amount / leaseDuration);

    return (
      <>
        {invoiceData.paymentOption === 'full' ? (
          // Full payment breakdown
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
            
            <div className="breakdown-item monthly-fee">
              <span>{lang.priceMonthlyFeeWithCommission}</span>
              <span>{invoiceData.monthlyFee.toLocaleString()} SEK/month</span>
            </div>
          </>
        ) : (
          // Monthly subscription breakdown
          <>
            <div className="breakdown-item">
              <span>{platformLabels[invoiceData.platform]}</span>
              <span>{getMonthlyAmount(platformWithSize).toLocaleString()} SEK/month</span>
            </div>
            
            {invoiceData.features.map(feature => (
              <div className="breakdown-item" key={feature}>
                <span>{featureLabels[feature]}</span>
                <span>{getMonthlyAmount(featureCosts[feature]).toLocaleString()} SEK/month</span>
              </div>
            ))}
            
            <div className="breakdown-item">
              <span>{designLabels[invoiceData.design]}</span>
              <span>{getMonthlyAmount(designCosts[invoiceData.design]).toLocaleString()} SEK/month</span>
            </div>
            
            {(invoiceData.timeline === 'fast' || invoiceData.timeline === 'urgent') && (
              <div className="breakdown-item">
                <span>{timelineFactors[invoiceData.timeline]}</span>
                <span>{invoiceData.timeline === 'fast' ? '+20%' : '+50%'}</span>
              </div>
            )}
            
            <div className="breakdown-item monthly-payment">
              <span>{lang.pricePaymentOptionsSubscription}</span>
              <span>{invoiceData.monthlyPayment.toLocaleString()} SEK/month</span>
            </div>

            <div className="breakdown-item monthly-fee">
              <span>{lang.priceMonthlyFeeWithCommission}</span>
              <span>{invoiceData.monthlyFee.toLocaleString()} SEK/month</span>
            </div>

            <div className="breakdown-item total">
              <span>{lang.priceTotalMonthlyCost}</span>
              <span>{(invoiceData.monthlyPayment + invoiceData.monthlyFee).toLocaleString()} SEK/month</span>
            </div>
          </>
        )}

        <div className="breakdown-item monthly-details">
          <span>{lang.priceMonthlyFeeBreakdown}</span>
          <div className="monthly-details-content">
            <div className="monthly-detail-item">
              <span>{lang.pricePlatformMaintenance}</span>
              <span>{invoiceData.monthlyPlatformCost.toLocaleString()} SEK</span>
            </div>
            {Object.entries(invoiceData.monthlyFeatureCosts).map(([feature, cost]) => (
              <div className="monthly-detail-item" key={feature}>
                <span>{featureLabels[feature]}:</span>
                <span>{cost.toLocaleString()} SEK</span>
              </div>
            ))}
            <div className="monthly-detail-item commission">
              <span>{lang.priceCommission}</span>
              <span>{invoiceData.commission.toLocaleString()} SEK</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="prices">
      <div className={`price-result animate-on-scroll visible`}>
        <div className="contact-form-section">
          <h3>{lang.contactFormTitle}</h3>
          
          {submitted ? (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h4>Thank you for your message!</h4>
              <p>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
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
              
              {/* Hidden fields for the project details */}
              {invoiceData && (
                <input 
                  type="hidden" 
                  name="project_details" 
                  value={`
Platform: ${platformLabels[invoiceData.platform]}
Size: ${invoiceData.size}
Features: ${invoiceData.features.map(f => featureLabels[f]).join(', ')}
Design: ${designLabels[invoiceData.design]}
Timeline: ${timelineFactors[invoiceData.timeline]}
${invoiceData.paymentOption === 'full' 
  ? `Estimated Price: ${invoiceData.price.toLocaleString()} SEK (${lang.pricePaymentOptionsFull})` 
  : `Monthly Subscription: ${invoiceData.monthlyPayment.toLocaleString()} SEK/month (${lang.priceSubscriptionCommitment})`}

${lang.priceMonthlyFeeBreakdown}
${lang.pricePlatformMaintenance} ${invoiceData.monthlyFeeBreakdown.platformMaintenance.toLocaleString()} SEK
${Object.entries(invoiceData.monthlyFeeBreakdown.features).map(([feature, data]) => 
  `${data.label}: ${data.cost.toLocaleString()} SEK`
).join('\n')}
${lang.priceCommission} ${invoiceData.monthlyFeeBreakdown.commission.toLocaleString()} SEK
Total Monthly Fee: ${invoiceData.monthlyFeeBreakdown.total.toLocaleString()} SEK
                  `}
                />
              )}

              {error && <div className="error-message">{error}</div>}

              <button 
                type="submit" 
                className={`submit-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : lang.contactFormSubmit}
              </button>
            </form>
          )}
        </div>
        
        <div className="result-header">
          <FaCalculator className="result-icon" />
          <h1>{lang.priceEstimateTitle}</h1>
          <div className="platform-badge">
            {invoiceData && platformLabels[invoiceData.platform]}
          </div>
        </div>
        
        <div className="price-display">
          {invoiceData?.paymentOption === 'lease' ? (
            <>
              <span className="price-amount">{invoiceData?.monthlyPayment.toLocaleString()}</span>
              <span className="price-currency">SEK</span>
              <span className="price-period">/month</span>
            </>
          ) : (
            <>
              <span className="price-amount">{invoiceData?.price.toLocaleString()}</span>
              <span className="price-currency">SEK</span>
            </>
          )}
        </div>
        
        <p className="price-note">
          {invoiceData?.paymentOption === 'lease' 
            ? lang.priceSubscriptionCommitment 
            : lang.priceEstimateNote}
        </p>
        
        <div className="breakdown-container">
          <h3>{lang.priceBreakdownTitle}</h3>
          {renderPriceBreakdown()}
        </div>
      </div>
    </div>
  );
};

export default Contact; 