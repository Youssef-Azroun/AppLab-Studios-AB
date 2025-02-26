import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import logo from './assets/images/logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import { 
  MdOutlineDesignServices,
  MdDevices,
  MdSpeed,
  MdSecurity,
  MdOutlineSupport
} from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentLanguage, setCurrentLanguage] = useState('sv')
  const navigate = useNavigate()
  const location = useLocation()

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
    if (isMenuOpen) {
      document.body.classList.add('body-locked')
    } else {
      document.body.classList.remove('body-locked')
    }
    return () => document.body.classList.remove('body-locked')
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.setProperty('--scroll-position', `${scrollPosition}px`);
    } else {
      document.documentElement.style.removeProperty('--scroll-position');
      window.scrollTo(0, scrollPosition);
    }
  }, [isMenuOpen, scrollPosition]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setScrollPosition(window.scrollY)
    }
    setIsMenuOpen(!isMenuOpen)
  }
  const handleNavigation = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    toggleMenu();
  };

  const HomePage = () => (
    <div className="home-content">
      <section className="section hero-section">
        <div className="hero-content">
          <h1 className="glowing-text">Innovera & Skapa</h1>
          <p className="hero-subtitle">Bygger Morgondagens Digitala Lösningar Idag</p>
          <div className="hero-buttons">
            <button className="glow-button">
              Starta Projekt
            </button>
            <button className="outline-button">
              Visa Portfolio
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
        <h2>Vår Expertis</h2>
        <div className="expertise-container">
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <FaGlobe className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Webbutveckling</h3>
              <p>Moderna webbapplikationer byggda med toppmodern teknik</p>
              <ul className="expertise-features">
                <li>React & Next.js</li>
                <li>Progressiva Webbappar</li>
                <li>Responsiv Design</li>
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
              <h3>Apputveckling</h3>
              <p>Nativa och plattformsövergripande mobila lösningar</p>
              <ul className="expertise-features">
                <li>iOS & Android Nativ</li>
                <li>React Native</li>
                <li>Flutter Utveckling</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdSpeed className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Prestanda optimering</h3>
              <p>Blixtsnabba lösningar för moderna applikationer</p>
              <ul className="expertise-features">
                <li>Laddningstidsoptimering</li>
                <li>Koddelning</li>
                <li>Cachningsstrategier</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdSecurity className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Säker Arkitektur</h3>
              <p>Säkerhetsimplementeringar av företagsklass</p>
              <ul className="expertise-features">
                <li>Datakryptering</li>
                <li>Säker Autentisering</li>
                <li>Regelbundna Säkerhetsgranskningar</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdOutlineSupport className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Dygnet Runt Support</h3>
              <p>Teknisk assistans dygnet runt</p>
              <ul className="expertise-features">
                <li>Live Chattsupport</li>
                <li>Prioriterad Respons</li>
                <li>Dedikerat Team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <h2>Vår Process</h2>
        <div className="process-container">
          <div className="process-step">
            <div className="process-number">01</div>
            <div className="process-content">
              <h3>Upptäckt</h3>
              <p>Förstå din vision och krav</p>
              <div className="process-details">
                <span>Kravinhämtning</span>
                <span>Marknadsundersökning</span>
                <span>Projektomfattning</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">02</div>
            <div className="process-content">
              <h3>Planering</h3>
              <p>Skapa detaljerad färdplan och arkitektur</p>
              <div className="process-details">
                <span>Teknisk Design</span>
                <span>Tidsplanering</span>
                <span>Resursallokering</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">03</div>
            <div className="process-content">
              <h3>Utveckling</h3>
              <p>Bygger din lösning med senaste tekniken</p>
              <div className="process-details">
                <span>Agil Utveckling</span>
                <span>Regelbundna Uppdateringar</span>
                <span>Kvalitetssäkring</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">04</div>
            <div className="process-content">
              <h3>Lansering</h3>
              <p>Driftsättning och underhåll av ditt projekt</p>
              <div className="process-details">
                <span>Driftsättning</span>
                <span>Övervakning</span>
                <span>Kontinuerligt Stöd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>Redo att Förverkliga Dina Idéer?</h2>
          <p>Låt oss skapa något fantastiskt tillsammans</p>
          <button className="pulse-button">
            Kom Igång
          </button>
        </div>
      </section>
    </div>
  )

  return (
    <div className={`app-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="Logo" className="logo" onClick={() => handleNavigation('/')} />
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </header>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close-btn" onClick={toggleMenu}>×</button>
        <ul className="menu-items">
          <li onClick={() => handleNavigation('/')}>
            <AiOutlineHome className="menu-icon-item" />
            <span>Hem</span>
          </li>
          <li onClick={() => handleNavigation('/services')}>
            <MdOutlineDesignServices className="menu-icon-item" />
            <span>Tjänster</span>
          </li>
          <li onClick={() => handleNavigation('/prices')}>
            <FaMobileAlt className="menu-icon-item" />
            <span>Priser</span>
          </li>
          <li onClick={() => handleNavigation('/about')}>
            <BsPeople className="menu-icon-item" />
            <span>Om oss</span>
          </li>
          <li className="language-selector">
            <div className="language-container">
              <div className="language-label">Språk:</div>
              <div className="language-options">
                <span 
                  className={`language-option ${currentLanguage === 'sv' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('sv')}
                >
                  Svenska
                </span>
                <span className="separator">|</span>
                <span 
                  className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="card">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-info" element={<ServicesInfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
//Hello my name is Youssef.