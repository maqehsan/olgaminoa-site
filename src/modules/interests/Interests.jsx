import styles from './Interests.module.css'

const interests = [
  {
    icon: '⚽',
    name: 'Football',
    description:
      'Following the game at every level — tactics, history, and the occasional Sunday league.',
  },
  {
    icon: '🍳',
    name: 'Cooking',
    description:
      'Enjoys the process as much as the result. Pasta, fermentation, and anything that takes patience.',
  },
  {
    icon: '🔧',
    name: 'Building things',
    description:
      'Side projects, tools, and tinkering. There\'s something satisfying about making something from nothing.',
  },
  {
    icon: null,
    name: null,
    description: null,
  },
]

export default function Interests() {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Interests</h1>
        <p className={styles.sub}>Things I spend time on outside of work.</p>
      </div>
      <div className={styles.grid}>
        {interests.map((item, i) =>
          item.name ? (
            <div key={item.name} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.cardTitle}>{item.name}</div>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ) : (
            <div key={i} className={`${styles.card} ${styles.placeholder}`}>
              <span className={styles.placeholderText}>Coming soon</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
