import { useState } from 'react'
import styles from './Navbar.module.css'
import LogoFull from './LogoFull'

export default function Navbar({ modules, activeId, onNavigate, onLogoClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.bar}>
        <button className={styles.brand} onClick={onLogoClick} aria-label="Home">
          <LogoFull />
        </button>
        <ul className={styles.links}>
          {modules.map((mod) => (
            <li key={mod.id}>
              <button
                className={`${styles.link} ${activeId === mod.id ? styles.active : ''}`}
                onClick={() => handleNavigate(mod.id)}
              >
                {mod.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {modules.map((mod) => (
            <li key={mod.id}>
              <button
                className={`${styles.mobileLink} ${activeId === mod.id ? styles.mobileLinkActive : ''}`}
                onClick={() => handleNavigate(mod.id)}
              >
                {mod.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
