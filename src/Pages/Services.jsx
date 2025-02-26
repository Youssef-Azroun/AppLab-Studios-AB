import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Services.css'
import {
  FaGlobe,
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaReact
} from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'

function Services() {
  const navigate = useNavigate()

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

  const handleServiceClick = (service) => {
    const serviceData = {
      title: service.title,
      description: service.description,
      features: service.features,
      iconType: Array.isArray(service.icon.props.children) 
        ? service.icon.props.children.map(icon => icon.type.name)
        : service.icon.type.name
    };
    
    navigate('/services-info', {
      state: {
        service: serviceData
      }
    });
  }

  const services = [
    {
      icon: <FaGlobe className="service-icon" />,
      title: "Webbutveckling",
      description: "Skräddarsydda webbapplikationer byggda med moderna teknologier och bästa praxis.",
      features: ["Responsiv Design", "Frontend-utveckling", "Backend-integration", "Prestandaoptimering"]
    },
    {
      icon: (
        <div className="icon-group">
          <FaApple className="service-icon" />
          <FaAndroid className="service-icon" />
        </div>
      ),
      title: "Nativ Apputveckling",
      description: "Nativa mobilapplikationer för iOS- och Android-plattformar.",
      features: ["iOS-utveckling (Swift/SwiftUI)", "Android-utveckling (Kotlin)", "Nativ Prestanda", "Plattformsspecifika Funktioner"]
    },
    {
      icon: (
        <div className="icon-group">
          <FaReact className="service-icon" />
          <SiFlutter className="service-icon" />
        </div>
      ),
      title: "Korsplattformsutveckling",
      description: "Effektiva multiplattformslösningar med React Native och Flutter.",
      features: ["React Native-utveckling", "Flutter-utveckling", "Återanvändbar Kod", "Konsekvent UI/UX"]
    }
  ]

  return (
    <div className="services">
      <section className="hero animate-on-scroll">
        <h1>Våra Tjänster</h1>
        <p className="tagline">
          Professionella utvecklingslösningar för webb och mobila plattformar
        </p>
      </section>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card animate-on-scroll"
            onClick={() => handleServiceClick(service)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleServiceClick(service);
            }}
          >
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
