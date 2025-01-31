import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import logo from './assets/images/logo.png'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegMoneyBillAlt, FaDatabase, FaLaptopCode, FaShieldAlt, FaBrain, FaChartBar, FaRobot, FaNetworkWired, FaUserShield } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { MdOutlineDesignServices } from 'react-icons/md'
import AboutUs from './Pages/AboutUs'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-locked');
    } else {
      document.body.classList.remove('body-locked');
    }

    return () => {
      document.body.classList.remove('body-locked');
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <div className={`app-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <img src={logo} alt="Logo" className="logo" />
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
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
          <Route path="/about" element={<AboutUs />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
