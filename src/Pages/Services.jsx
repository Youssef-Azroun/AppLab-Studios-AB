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
import { useLanguage } from '../context/LanguageContext'

function Services() {
  const navigate = useNavigate()
  const { lang } = useLanguage()

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
      title: lang.servicesWebTitle,
      description: lang.servicesWebDescription,
      features: [
        lang.servicesWebFeature1, 
        lang.servicesWebFeature2, 
        lang.servicesWebFeature3, 
        lang.servicesWebFeature4
      ]
    },
    {
      icon: (
        <div className="icon-group">
          <FaApple className="service-icon" />
          <FaAndroid className="service-icon" />
        </div>
      ),
      title: lang.servicesNativeTitle,
      description: lang.servicesNativeDescription,
      features: [
        lang.servicesNativeFeature1, 
        lang.servicesNativeFeature2, 
        lang.servicesNativeFeature3, 
        lang.servicesNativeFeature4
      ]
    },
    {
      icon: (
        <div className="icon-group">
          <FaReact className="service-icon" />
          <SiFlutter className="service-icon" />
        </div>
      ),
      title: lang.servicesCrossTitle,
      description: lang.servicesCrossDescription,
      features: [
        lang.servicesCrossFeature1, 
        lang.servicesCrossFeature2, 
        lang.servicesCrossFeature3, 
        lang.servicesCrossFeature4
      ]
    }
  ]

  return (
    <div className="services">
      <section className="hero animate-on-scroll">
        <h1>{lang.servicesHeroTitle}</h1>
        <p className="tagline">
          {lang.servicesHeroTagline}
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
