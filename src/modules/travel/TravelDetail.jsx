import { useNavigate, useParams } from 'react-router-dom'
import { getCountryBySlug } from './data'
import styles from './TravelDetail.module.css'

export default function TravelDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const country = getCountryBySlug(slug)

  if (!country) {
    return (
      <div className={styles.notFound}>
        <p>Country not found.</p>
        <button className={styles.back} onClick={() => navigate('/travel')}>
          ← Back to map
        </button>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={() => navigate('/travel')}>
        ← Back to map
      </button>

      <header className={styles.header}>
        <span className={styles.emoji}>{country.coverEmoji}</span>
        <div>
          <h1 className={styles.title}>{country.name}</h1>
          <p className={styles.year}>{country.year}</p>
          <p className={styles.summary}>{country.summary}</p>
        </div>
      </header>

      <div className={styles.divider} />

      <div className={styles.blog}>
        {country.blog.map((section, i) => (
          <article key={i} className={styles.section}>
            <h2 className={styles.sectionHeading}>{section.heading}</h2>
            <p className={styles.sectionBody}>{section.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
