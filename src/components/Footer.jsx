import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'
import { useLanguage } from '../context/LanguageContext'
import Svenska from '../Languages/Svenska'

function Footer() {
  // Use a try-catch to handle potential errors with the context
  let lang;
  try {
    const context = useLanguage();
    lang = context.lang;
  } catch (error) {
    console.error("Language context error in Footer:", error);
    // Fallback to default values
    lang = Svenska;
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>{lang.footerAboutTitle}</h3>
            <p>{lang.footerAboutDesc}</p>
          </div>
          
          <div className="footer-section">
            <h3>{lang.footerContactTitle}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:0777777777">{lang.footerPhone}</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info.support@applabstudios.se">{lang.footerEmail}</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>{lang.footerLocation}</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>{lang.footerLinksTitle}</h3>
            <ul className="footer-links">
              <li><Link to="/">{lang.footerHomeLink}</Link></li>
              <li><Link to="/services">{lang.footerServicesLink}</Link></li>
              <li><Link to="/about">{lang.footerAboutLink}</Link></li>
              <li><Link to="/prices">{lang.footerPricesLink}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>{lang.footerLegalTitle}</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">{lang.footerPrivacyPolicy}</Link></li>
              <li><Link to="/terms">{lang.footerTerms}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {lang.footerCompanyName}. {lang.footerRights}.</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 