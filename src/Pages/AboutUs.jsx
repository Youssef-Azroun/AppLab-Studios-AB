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
        <h1>Innovate. Create. Deliver.</h1>
        <p className="tagline">
          Transforming visionary ideas into exceptional digital experiences
        </p>
      </section>

      <section className="mission animate-on-scroll">
        <div className="mission-content">
          <h2>Our Mission & Vision</h2>
          <p>
            At AppLab, we're more than just developers – we're digital innovators passionate 
            about crafting transformative solutions that drive business success. Our mission 
            is to bridge the gap between imagination and technology, delivering cutting-edge 
            solutions that empower businesses to thrive in the digital age.
          </p>
          <p>
            We believe in pushing boundaries, embracing challenges, and turning complex 
            problems into elegant solutions. Our team combines technical expertise with 
            creative thinking to deliver results that exceed expectations.
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="service-card animate-on-scroll">
          <FaGlobe className="service-icon" />
          <h3>Web Development</h3>
          <p>Crafting responsive, scalable websites that deliver exceptional user experiences and drive business growth.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaMobileAlt className="service-icon" />
          <h3>Mobile Solutions</h3>
          <p>Building innovative mobile applications that engage users and extend your digital reach.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaCloud className="service-icon" />
          <h3>Cloud Architecture</h3>
          <p>Designing robust cloud infrastructure that ensures scalability, security, and optimal performance.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaCogs className="service-icon" />
          <h3>Custom Solutions</h3>
          <p>Developing tailored software solutions that address your unique business challenges.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaRocket className="service-icon" />
          <h3>Digital Strategy</h3>
          <p>Creating comprehensive digital strategies that align with your business objectives.</p>
        </div>
        <div className="service-card animate-on-scroll">
          <FaChartLine className="service-icon" />
          <h3>Analytics & Insights</h3>
          <p>Leveraging data analytics to drive informed decision-making and business growth.</p>
        </div>
      </section>

      <section className="stats animate-on-scroll">
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Active Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Project Success Rate</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Development Support</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years Combined Experience</span>
        </div>
      </section>

      <section className="contact-cta animate-on-scroll">
        <h2>Ready to Transform Your Digital Presence?</h2>
        <p>Let's collaborate to bring your vision to life</p>
        <button className="cta-button">Start Your Journey</button>
      </section>
    </div>
  )
}

export default AboutUs

