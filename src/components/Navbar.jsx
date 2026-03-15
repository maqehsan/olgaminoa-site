import styles from './Navbar.module.css'
import LogoFull from './LogoFull'

export default function Navbar({ modules, activeId, onNavigate }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <LogoFull />
      </div>
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
    </nav>
  )
}
