import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AboutUs.css'
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaCloud, 
  FaCode, 
  FaChartLine, 
  FaLightbulb 
} from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import Svenska from '../Languages/Svenska'

function AboutUs() {
  const navigate = useNavigate()
  
  // Use a try-catch to handle potential errors with the context
  let lang;
  try {
    const context = useLanguage();
    lang = context.lang;
  } catch (error) {
    console.error("Language context error in AboutUs:", error);
    // Fallback to default values
    lang = Svenska;
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const navigateToPrices = () => {
    navigate('/prices')
  }

  return (
    <div className="about-us">
      <section className="hero">
        <div className="animate-on-scroll">
          <h1>{lang.aboutHeroTitle}</h1>
          <p className="tagline">{lang.aboutHeroTagline}</p>
        </div>
      </section>

      <section className="mission">
        <div className="mission-content animate-on-scroll">
          <h2>{lang.aboutMissionTitle}</h2>
          <p>{lang.aboutMissionText1}</p>
          <p>{lang.aboutMissionText2}</p>
        </div>
      </section>

      <div className="services-grid">
        <div className="service-card animate-on-scroll">
          <FaGlobe className="service-icon" />
          <h3>{lang.aboutServiceWebTitle}</h3>
          <p>{lang.aboutServiceWebDesc}</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaMobileAlt className="service-icon" />
          <h3>{lang.aboutServiceMobileTitle}</h3>
          <p>{lang.aboutServiceMobileDesc}</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaCloud className="service-icon" />
          <h3>{lang.aboutServiceCloudTitle}</h3>
          <p>{lang.aboutServiceCloudDesc}</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaCode className="service-icon" />
          <h3>{lang.aboutServiceCustomTitle}</h3>
          <p>{lang.aboutServiceCustomDesc}</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaChartLine className="service-icon" />
          <h3>{lang.aboutServiceStrategyTitle}</h3>
          <p>{lang.aboutServiceStrategyDesc}</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaLightbulb className="service-icon" />
          <h3>{lang.aboutServiceAnalyticsTitle}</h3>
          <p>{lang.aboutServiceAnalyticsDesc}</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-item animate-on-scroll">
          <span className="stat-number">{lang.aboutStatProjects}</span>
          <span className="stat-label">{lang.aboutStatProjectsLabel}</span>
        </div>
        <div className="stat-item animate-on-scroll">
          <span className="stat-number">{lang.aboutStatSuccess}</span>
          <span className="stat-label">{lang.aboutStatSuccessLabel}</span>
        </div>
        <div className="stat-item animate-on-scroll">
          <span className="stat-number">{lang.aboutStatSupport}</span>
          <span className="stat-label">{lang.aboutStatSupportLabel}</span>
        </div>
        <div className="stat-item animate-on-scroll">
          <span className="stat-number">{lang.aboutStatExperience}</span>
          <span className="stat-label">{lang.aboutStatExperienceLabel}</span>
        </div>
      </div>

      <section className="contact-cta">
        <div className="animate-on-scroll">
          <h2>{lang.aboutCtaTitle}</h2>
          <p>{lang.aboutCtaSubtitle}</p>
          <button className="cta-button" onClick={navigateToPrices}>
            {lang.aboutCtaButton}
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

