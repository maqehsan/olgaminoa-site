import styles from './Interests.module.css'

const interests = [
  {
    icon: '🏋️',
    name: 'Gym',
    description:
      'Consistent training, progressive overload, and the quiet satisfaction of showing up.',
  },
  {
    icon: '🧘',
    name: 'Pilates',
    description:
      'All about control and precision. A good counterbalance to the intensity of the gym.',
  },
  {
    icon: '🍳',
    name: 'Cooking',
    description:
      'Enjoys the process as much as the result. Trying new recipes and making old ones better.',
  },
  {
    icon: '📊',
    name: 'Puzzling with data',
    description:
      'Finding patterns, asking the right questions, and turning raw numbers into something that actually means something.',
  },
  {
    icon: '👗',
    name: 'Fashion',
    description:
      'Personal style as self-expression. An eye for detail, quality over quantity.',
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
        {interests.map((item) => (
          <div key={item.name} className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <div className={styles.cardTitle}>{item.name}</div>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
