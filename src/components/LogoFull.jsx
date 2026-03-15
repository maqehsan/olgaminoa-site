import styles from './LogoFull.module.css'

export default function LogoFull() {
  return (
    <span className={styles.logo} aria-label="olgaminoa.me">
      <span className={styles.name}>olgaminoa</span><span className={styles.tld}>.me</span>
    </span>
  )
}
