import { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { visitedCountries } from './data'
import styles from './Travel.module.css'

const TravelGlobe = lazy(() => import('./TravelGlobe'))

export default function Travel() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Travel</h1>
        <p className={styles.sub}>
          Places I have been. Click a marker to read more.
        </p>
      </div>

      <Suspense
        fallback={
          <div className={styles.globeFallback}>
            <div className={styles.globeLoader} />
          </div>
        }
      >
        <TravelGlobe onCountryClick={(slug) => navigate(`/travel/${slug}`)} />
      </Suspense>

      <div className={styles.hint}>Drag to rotate · Scroll to zoom · Click a marker</div>

      <div className={styles.grid}>
        {Object.entries(visitedCountries).map(([, country]) => (
          <button
            key={country.slug}
            className={styles.card}
            onClick={() => navigate(`/travel/${country.slug}`)}
          >
            <span className={styles.cardEmoji}>{country.coverEmoji}</span>
            <div className={styles.cardBody}>
              <div className={styles.cardName}>{country.name}</div>
              <div className={styles.cardYear}>{country.year}</div>
              <p className={styles.cardSummary}>{country.summary}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
