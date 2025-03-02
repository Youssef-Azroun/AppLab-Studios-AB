import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { 
  MdOutlineDesignServices,
  MdDevices,
  MdSpeed,
  MdSecurity,
  MdOutlineSupport
} from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { FaMobileAlt } from 'react-icons/fa'
import './Menu.css'
import { useLanguage } from '../context/LanguageContext'
import Svenska from '../Languages/Svenska'

function Menu({ isMenuOpen, toggleMenu, handleLanguageChange }) {
  const navigate = useNavigate()
  const [scrollPosition, setScrollPosition] = useState(0)
  
  // Use context directly, with fallback
  let currentLanguage, lang;
  try {
    const context = useLanguage();
    currentLanguage = context.currentLanguage;
    lang = context.lang;
  } catch (error) {
    console.log("Using fallback language in Menu");
    currentLanguage = 'sv';
    lang = Svenska;
  }

  useEffect(() => {
    if (isMenuOpen) {
      setScrollPosition(window.scrollY)
      document.body.classList.add('body-locked')
      document.documentElement.style.setProperty('--scroll-position', `${window.scrollY}px`)
    } else {
      document.body.classList.remove('body-locked')
      document.documentElement.style.removeProperty('--scroll-position')
      window.scrollTo(0, scrollPosition)
    }
    return () => {
      document.body.classList.remove('body-locked')
      document.documentElement.style.removeProperty('--scroll-position')
    }
  }, [isMenuOpen, scrollPosition])

  const handleNavigation = (path) => {
    navigate(path)
    toggleMenu()
  }

  return (
    <>
      <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close-btn" onClick={toggleMenu}>×</button>
        <ul className="menu-items">
          <li onClick={() => handleNavigation('/')}>
            <AiOutlineHome className="menu-icon-item" />
            <span>{lang.menuHome}</span>
          </li>
          <li onClick={() => handleNavigation('/services')}>
            <MdOutlineDesignServices className="menu-icon-item" />
            <span>{lang.menuServices}</span>
          </li>
          <li onClick={() => handleNavigation('/prices')}>
            <FaMobileAlt className="menu-icon-item" />
            <span>{lang.menuPrices}</span>
          </li>
          <li onClick={() => handleNavigation('/about')}>
            <BsPeople className="menu-icon-item" />
            <span>{lang.menuAbout}</span>
          </li>
          <li className="language-selector">
            <div className="language-container">
              <div className="language-label">{lang.menuLanguage}</div>
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
    </>
  )
}

export default Menu
