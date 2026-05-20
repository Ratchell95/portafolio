 

import { useState } from 'react'

export default function Navbar({ theme, setTheme }) {
 
  const [menuOpen, setMenuOpen] = useState(false)
 
  const toggleMenu = () => setMenuOpen(v => !v)
 
  const closeMenu = () => setMenuOpen(false)

 
  const MoonIcon = () => (
    <svg viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
 
  const SunIcon = () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      {/* Rayos del sol */}
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  )
 
  const ThemeToggle = ({ id }) => (
    <div className="theme-toggle" id={id}>
      
      <button
        className={`theme-btn${theme === 'dark' ? ' active' : ''}`}
        onClick={() => setTheme('dark')}
        title="Modo oscuro"
      >
        <MoonIcon />
      </button>
 
      <button
        className={`theme-btn${theme === 'light' ? ' active' : ''}`}
        onClick={() => setTheme('light')}
        title="Modo claro"
      >
        <SunIcon />
      </button>
    </div>
  )

  return (
    <>
 
      <nav id="mainNav" className={menuOpen ? 'menu-open' : ''}>

   
        <div className="nav-logo">MARJHORI RATCHELL</div>
 
        <div className="nav-links">
          <a href="#about">Perfil</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="mailto:tuemail@dominio.com" className="nav-cta">Contacto</a>
 
          <ThemeToggle id="themeToggle" />
        </div>
 
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }} className="nav-mobile-right">
          <ThemeToggle id="themeToggleMobile" />
 
          <button
            className="nav-hamburger"
            id="navHamburger"
            aria-label="Menú"
            onClick={toggleMenu}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
 
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#about"    onClick={closeMenu}>Perfil</a>
        <a href="#skills"   onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Proyectos</a>
        <a href="mailto:tuemail@dominio.com" className="nav-mobile-cta" onClick={closeMenu}>
          Contacto
        </a>
      </div>
    </>
  )
}
