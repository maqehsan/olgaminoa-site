import styles from './Navbar.module.css'
import Logo from './Logo'

export default function Navbar({ modules, activeId, onNavigate }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <span className={styles.brand}><Logo size={22} /></span>
        <ul className={styles.links}>
          {modules.map((mod) => (
            <li key={mod.id}>
              <button
                className={`${styles.link} ${activeId === mod.id ? styles.active : ''}`}
                onClick={() => onNavigate(mod.id)}
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
