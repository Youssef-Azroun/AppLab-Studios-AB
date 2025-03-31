import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import { 
  MdSpeed,
  MdSecurity,
  MdOutlineSupport
} from 'react-icons/md'
import { 
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaGlobe 
} from 'react-icons/fa'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import Footer from './components/Footer'
import ServicesInfo from './Pages/ServicesInfo'
import Header from './components/Header'
import Prices from './Pages/Prices'
import Terms from './components/Terms'
import { useLanguage } from './context/LanguageContext'
import Svenska from './Languages/Svenska'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Use a try-catch to handle potential errors with the context
  let languageContext;
  try {
    languageContext = useLanguage();
  } catch (error) {
    console.error("Language context error:", error);
    // Fallback to default values
    languageContext = {
      currentLanguage: 'sv',
      lang: Svenska,
      toggleLanguage: () => console.log("Language toggle not available")
    };
  }
  
  const { currentLanguage, lang, toggleLanguage } = languageContext;
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLanguageChange = (langCode) => {
    toggleLanguage(langCode)
    toggleMenu()
  }

  const navigateToPrices = () => {
    navigate('/prices')
  }

  const navigateToServices = () => {
    navigate('/services')
  }

  const HomePage = () => (
    <div className="home-content">
      <section className="section hero-section">
        <div className="hero-content">
          <h1 className="glowing-text">{lang.heroTitle}</h1>
          <p className="hero-subtitle">{lang.heroSubtitle}</p>
          <div className="hero-buttons">
            <button className="glow-button" onClick={navigateToPrices}>
              {lang.startProject}
            </button>
            <button className="outline-button" onClick={navigateToServices}>
              {lang.seeServices}
            </button>
          </div>
        </div>
        <div className="tech-stack">
          <FaAndroid className="tech-icon" />
          <FaApple className="tech-icon" />
          <FaMobileAlt className="tech-icon" />
          <FaGlobe className="tech-icon" />
        </div>
      </section>

      <section className="section expertise-section">
        <h2>{lang.expertiseTitle}</h2>
        <div className="expertise-container">
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <FaGlobe className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>{lang.websiteTitle}</h3>
              <p>{lang.websiteDescription}</p>
              <ul className="expertise-features">
                <li>{lang.websiteFeature1}</li>
                <li>{lang.websiteFeature2}</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <div style={{ display: 'flex', gap: '8px' }}>
                <FaAndroid className="expertise-icon" style={{ fontSize: '1.8rem' }} />
                <FaApple className="expertise-icon" style={{ fontSize: '1.8rem' }} />
              </div>
            </div>
            <div className="expertise-content">
              <h3>{lang.appsTitle}</h3>
              <p>{lang.appsDescription}</p>
              <ul className="expertise-features">
                <li>{lang.appsFeature1}</li>
                <li>{lang.appsFeature2}</li>
                <li>{lang.appsFeature3}</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdSpeed className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>{lang.fastTitle}</h3>
              <p>{lang.fastDescription}</p>
              <ul className="expertise-features">
                <li>{lang.fastFeature1}</li>
                <li>{lang.fastFeature2}</li>
                <li>{lang.fastFeature3}</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdSecurity className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>{lang.securityTitle}</h3>
              <p>{lang.securityDescription}</p>
              <ul className="expertise-features">
                <li>{lang.securityFeature1}</li>
                <li>{lang.securityFeature2}</li>
                <li>{lang.securityFeature3}</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdOutlineSupport className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>{lang.supportTitle}</h3>
              <p>{lang.supportDescription}</p>
              <ul className="expertise-features">
                <li>{lang.supportFeature1}</li>
                <li>{lang.supportFeature2}</li>
                <li>{lang.supportFeature3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <h2>{lang.processTitle}</h2>
        <div className="process-container">
          <div className="process-step">
            <div className="process-number">{lang.processStep1Number}</div>
            <div className="process-content">
              <h3>{lang.processStep1Title}</h3>
              <p>{lang.processStep1Description}</p>
              <div className="process-details">
                <span>{lang.processStep1Detail1}</span>
                <span>{lang.processStep1Detail2}</span>
                <span>{lang.processStep1Detail3}</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">{lang.processStep2Number}</div>
            <div className="process-content">
              <h3>{lang.processStep2Title}</h3>
              <p>{lang.processStep2Description}</p>
              <div className="process-details">
                <span>{lang.processStep2Detail1}</span>
                <span>{lang.processStep2Detail2}</span>
                <span>{lang.processStep2Detail3}</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">{lang.processStep3Number}</div>
            <div className="process-content">
              <h3>{lang.processStep3Title}</h3>
              <p>{lang.processStep3Description}</p>
              <div className="process-details">
                <span>{lang.processStep3Detail1}</span>
                <span>{lang.processStep3Detail2}</span>
                <span>{lang.processStep3Detail3}</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">{lang.processStep4Number}</div>
            <div className="process-content">
              <h3>{lang.processStep4Title}</h3>
              <p>{lang.processStep4Description}</p>
              <div className="process-details">
                <span>{lang.processStep4Detail1}</span>
                <span>{lang.processStep4Detail2}</span>
                <span>{lang.processStep4Detail3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>{lang.ctaTitle}</h2>
          <p>{lang.ctaSubtitle}</p>
          <button className="pulse-button" onClick={navigateToPrices}>
            {lang.ctaButton}
          </button>
        </div>
      </section>
    </div>
  )

  return (
    <div className={`app-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Menu 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleLanguageChange={handleLanguageChange}
      />
      <div className="card">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/about-:lang" element={<AboutUs />} />
          <Route path="/services-:lang" element={<Services />} />
          <Route path="/services-info-:lang" element={<ServicesInfo />} />
          <Route path="/prices-:lang" element={<Prices />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Add fallback routes without language suffix */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-info" element={<ServicesInfo />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
//Hello my name is Youssef.