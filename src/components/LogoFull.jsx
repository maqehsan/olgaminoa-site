import styles from './LogoFull.module.css'

export default function LogoFull() {
  return (
    <svg
      viewBox="0 0 680 112"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo}
      aria-label="olgaminoa.me"
    >
      <text
        x="340"
        y="76"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="72"
        fontWeight="300"
        fontStyle="italic"
        letterSpacing="-1"
        className={styles.name}
      >
        olgaminoa<tspan className={styles.tld}>.me</tspan>
      </text>
    </svg>
  )
}
