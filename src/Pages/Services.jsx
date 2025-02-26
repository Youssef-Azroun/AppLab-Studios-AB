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
    // Create a simplified version of the service object without JSX
    const serviceData = {
      title: service.title,
      description: service.description,
      features: service.features,
      // For icon groups, we'll pass the type names
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
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "Frontend Development", "Backend Integration", "Performance Optimization"]
    },
    {
      icon: (
        <div className="icon-group">
          <FaApple className="service-icon" />
          <FaAndroid className="service-icon" />
        </div>
      ),
      title: "Native App Development",
      description: "Native mobile applications for iOS and Android platforms.",
      features: ["iOS Development (Swift/SwiftUI)", "Android Development (Kotlin)", "Native Performance", "Platform-Specific Features"]
    },
    {
      icon: (
        <div className="icon-group">
          <FaReact className="service-icon" />
          <SiFlutter className="service-icon" />
        </div>
      ),
      title: "Cross-Platform Development",
      description: "Efficient multi-platform solutions using React Native and Flutter.",
      features: ["React Native Development", "Flutter Development", "Code Reusability", "Consistent UI/UX"]
    }
  ]

  return (
    <div className="services">
      <section className="hero animate-on-scroll">
        <h1>Our Services</h1>
        <p className="tagline">
          Professional development solutions for web and mobile platforms
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
