import { useEffect } from 'react'
import './AboutUs.css'
import { 
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaHandshake, 
  FaRocket, 
  FaUsers,
  FaCogs,
  FaChartLine,
  FaGlobe
} from 'react-icons/fa'

function AboutUs() {
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

  return (
    <div className="about-us">
      <section className="hero animate-on-scroll">
        <h1>Innovera. Skapa. Leverera.</h1>
        <p className="tagline">
          Förvandlar visionära idéer till exceptionella digitala upplevelser
        </p>
      </section>

      <section className="mission animate-on-scroll">
        <div className="mission-content">
          <h2>Vårt Uppdrag & Vision</h2>
          <p>
            På AppLab är vi mer än bara utvecklare – vi är digitala innovatörer som brinner 
            för att skapa transformativa lösningar som driver företagens framgång. Vårt uppdrag 
            är att överbrygga klyftan mellan fantasi och teknik, och leverera toppmoderna 
            lösningar som ger företag möjlighet att blomstra i den digitala tidsåldern.
          </p>
          <p>
            Vi tror på att tänja gränser, anta utmaningar och förvandla komplexa 
            problem till eleganta lösningar. Vårt team kombinerar teknisk expertis med 
            kreativt tänkande för att leverera resultat som överträffar förväntningarna.
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="service-card animate-on-scroll">
          <FaGlobe className="service-icon" />
          <h3>Webbutveckling</h3>
          <p>Skapar responsiva, skalbara webbplatser som levererar exceptionella användarupplevelser och driver affärstillväxt.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaMobileAlt className="service-icon" />
          <h3>Mobila Lösningar</h3>
          <p>Bygger innovativa mobilapplikationer som engagerar användare och utökar din digitala räckvidd.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaCloud className="service-icon" />
          <h3>Molnarkitektur</h3>
          <p>Designar robust molninfrastruktur som säkerställer skalbarhet, säkerhet och optimal prestanda.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaCogs className="service-icon" />
          <h3>Anpassade Lösningar</h3>
          <p>Utvecklar skräddarsydda mjukvarulösningar som hanterar dina unika affärsutmaningar.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaRocket className="service-icon" />
          <h3>Digital Strategi</h3>
          <p>Skapar omfattande digitala strategier som ligger i linje med dina affärsmål.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaChartLine className="service-icon" />
          <h3>Analys & Insikter</h3>
          <p>Utnyttjar dataanalys för att driva informerat beslutsfattande och affärstillväxt.</p>
        </div>
      </section>

      <section className="stats animate-on-scroll">
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Aktiva Projekt</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Projektframgång</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Utvecklingssupport</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Års Samlad Erfarenhet</span>
        </div>
      </section>

      <section className="contact-cta animate-on-scroll">
        <h2>Redo att Transformera Din Digitala Närvaro?</h2>
        <p>Låt oss samarbeta för att förverkliga din vision</p>
        <button className="cta-button">Påbörja Din Resa</button>
      </section>
    </div>
  )
}

export default AboutUs

