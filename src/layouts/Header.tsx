import { Link, NavLink } from 'react-router-dom'
import sportSeeLogo from '../assets/logos/sport-see-logo-big.png'
import burgerIcon from '../assets/icons/burger.svg'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const handleToggleMenu = () => {
    if (isOpening) return
    setIsOpening(true)
    setIsOpen(!isOpen)
    setTimeout(() => {
      setIsOpening(false)
    }, 250)
  }

  return (
    <header className="header">
      <Link to={'/'}>
        <img src={sportSeeLogo} alt="logo SportSee" className="header__logo" />
      </Link>
      <nav className="header__navbar">
        <img
          className="header__navbar__icon"
          src={burgerIcon}
          alt="navbar burger"
          onClick={handleToggleMenu}
        />
        <ul
          className={`header__navbar__list ${
            isOpen ? 'header__navbar__list--open' : ''
          } ${isOpening && isOpen ? 'header__navbar__list--opening' : ''} ${
            isOpening && !isOpen ? 'header__navbar__list--closing' : ''
          }`}
        >
          <li className="header__navbar__list__item" onClick={handleToggleMenu}>
            <NavLink to={'/'}>Accueil</NavLink>
          </li>
          <li className="header__navbar__list__item" onClick={handleToggleMenu}>
            <NavLink to={'/profile'}>Profil</NavLink>
          </li>
          <li className="header__navbar__list__item" onClick={handleToggleMenu}>
            <NavLink to={'/settings'}>Réglages</NavLink>
          </li>
          <li className="header__navbar__list__item" onClick={handleToggleMenu}>
            <NavLink to={'/community'}>Communauté</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
