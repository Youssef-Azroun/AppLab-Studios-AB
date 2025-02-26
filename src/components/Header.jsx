import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './Header.css'

function Header({ isMenuOpen, toggleMenu }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

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

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="logo" onClick={() => handleNavigation('/')} />
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </header>
  )
}

export default Header
