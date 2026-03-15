import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>Olga Milovanova</h1>
        <p className={styles.tagline}>Insurance supervision · Amsterdam</p>
      </div>
    </div>
  )
}
