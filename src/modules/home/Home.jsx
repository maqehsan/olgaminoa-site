import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const sections = [
  { label: 'CV',        path: '/cv' },
  { label: 'Interests', path: '/interests' },
  { label: 'Recipes',   path: '/recipes' },
  { label: 'Wishlist',  path: '/wishlist' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>Olga Milovanova</h1>
        <p className={styles.tagline}>Insurance supervision · Amsterdam</p>
        <nav className={styles.links}>
          {sections.map((s, i) => (
            <span key={s.label} className={styles.linkItem}>
              {i > 0 && <span className={styles.sep}>·</span>}
              <button className={styles.link} onClick={() => navigate(s.path)}>
                {s.label}
              </button>
            </span>
          ))}
        </nav>
      </div>

    </div>
  )
}
