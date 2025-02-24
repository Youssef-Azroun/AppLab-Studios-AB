import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
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
import { FaRegMoneyBillAlt, FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa'
import AboutUs from './Pages/AboutUs'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const navigate = useNavigate()

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

  const HomePage = () => (
    <div className="home-content">
      <section className="section hero-section">
        <div className="hero-content">
          <h1 className="glowing-text">Innovate & Create</h1>
          <p className="hero-subtitle">Building Tomorrow's Digital Solutions Today</p>
          <div className="hero-buttons">
            <button className="glow-button">
              Start Project
            </button>
            <button className="outline-button">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="tech-stack">
          <FaCode className="tech-icon" />
          <FaMobileAlt className="tech-icon" />
          <FaDatabase className="tech-icon" />
        </div>
      </section>

      <section className="section expertise-section">
        <h2>Our Expertise</h2>
        <div className="expertise-container">
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdDevices className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Cross-Platform Development</h3>
              <p>Native apps for iOS, Android, and Web platforms</p>
              <ul className="expertise-features">
                <li>React Native</li>
                <li>iOS Development</li>
                <li>Android Development</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdSpeed className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Performance Optimization</h3>
              <p>Lightning-fast solutions for modern applications</p>
              <ul className="expertise-features">
                <li>Load Time Optimization</li>
                <li>Code Splitting</li>
                <li>Caching Strategies</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdSecurity className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>Secure Architecture</h3>
              <p>Enterprise-grade security implementations</p>
              <ul className="expertise-features">
                <li>Data Encryption</li>
                <li>Secure Authentication</li>
                <li>Regular Security Audits</li>
              </ul>
            </div>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon-wrapper">
              <MdOutlineSupport className="expertise-icon" />
            </div>
            <div className="expertise-content">
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical assistance</p>
              <ul className="expertise-features">
                <li>Live Chat Support</li>
                <li>Priority Response</li>
                <li>Dedicated Team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <h2>Our Process</h2>
        <div className="process-container">
          <div className="process-step">
            <div className="process-number">01</div>
            <div className="process-content">
              <h3>Discovery</h3>
              <p>Understanding your vision and requirements</p>
              <div className="process-details">
                <span>Requirements Gathering</span>
                <span>Market Research</span>
                <span>Project Scoping</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">02</div>
            <div className="process-content">
              <h3>Planning</h3>
              <p>Creating detailed roadmap and architecture</p>
              <div className="process-details">
                <span>Technical Design</span>
                <span>Timeline Planning</span>
                <span>Resource Allocation</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">03</div>
            <div className="process-content">
              <h3>Development</h3>
              <p>Building your solution with latest technologies</p>
              <div className="process-details">
                <span>Agile Development</span>
                <span>Regular Updates</span>
                <span>Quality Assurance</span>
              </div>
            </div>
            <div className="process-line"></div>
          </div>
          
          <div className="process-step">
            <div className="process-number">04</div>
            <div className="process-content">
              <h3>Launch</h3>
              <p>Deploying and maintaining your project</p>
              <div className="process-details">
                <span>Deployment</span>
                <span>Monitoring</span>
                <span>Continuous Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Ideas?</h2>
          <p>Let's create something amazing together</p>
          <button className="pulse-button">
            Get Started
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
            <span>Home</span>
          </li>
          <li onClick={() => handleNavigation('/services')}>
            <MdOutlineDesignServices className="menu-icon-item" />
            <span>Services</span>
          </li>
          <li onClick={() => handleNavigation('/prices')}>
            <FaRegMoneyBillAlt className="menu-icon-item" />
            <span>Prices</span>
          </li>
          <li onClick={() => handleNavigation('/about')}>
            <BsPeople className="menu-icon-item" />
            <span>About us</span>
          </li>
        </ul>
      </nav>
      <div className="card">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
//Hello my name is Youssef.