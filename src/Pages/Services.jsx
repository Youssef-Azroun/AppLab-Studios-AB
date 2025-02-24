import { useEffect } from 'react'
import './Services.css'
import {
  FaCode,
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaReact
} from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'

function Services() {
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
    <div className="services">
      <section className="hero animate-on-scroll">
        <h1>Our Services</h1>
        <p className="tagline">
          Professional development solutions for web and mobile platforms
        </p>
      </section>

      <div className="services-grid">
        <div className="service-card animate-on-scroll">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>Custom web applications built with modern technologies and best practices.</p>
          <ul className="service-features">
            <li>Responsive Design</li>
            <li>Frontend Development</li>
            <li>Backend Integration</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="service-card animate-on-scroll">
          <div className="icon-group">
            <FaApple className="service-icon" />
            <FaAndroid className="service-icon" />
          </div>
          <h3>Native App Development</h3>
          <p>Native mobile applications for iOS and Android platforms.</p>
          <ul className="service-features">
            <li>iOS Development (Swift/SwiftUI)</li>
            <li>Android Development (Kotlin)</li>
            <li>Native Performance</li>
            <li>Platform-Specific Features</li>
          </ul>
        </div>

        <div className="service-card animate-on-scroll">
          <div className="icon-group">
            <FaReact className="service-icon" />
            <SiFlutter className="service-icon" />
          </div>
          <h3>Cross-Platform Development</h3>
          <p>Efficient multi-platform solutions using React Native and Flutter.</p>
          <ul className="service-features">
            <li>React Native Development</li>
            <li>Flutter Development</li>
            <li>Code Reusability</li>
            <li>Consistent UI/UX</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
