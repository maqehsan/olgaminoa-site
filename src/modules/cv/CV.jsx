import { data } from './data'
import styles from './CV.module.css'

export default function CV() {
  return (
    <div className={styles.cv}>
      {/* Header */}
      <section className={styles.section}>
        <div>
          <div className={styles.meta}>
            <span>{data.location}</span>
            <span className={styles.dot}>·</span>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.metaLink}
            >
              {data.linkedin.replace('https://', '')}
            </a>
          </div>
        </div>
        <p className={styles.tagline}>{data.tagline}</p>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.skillGroups}>
          {data.skills.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <span className={styles.skillGroupLabel}>{group.group}</span>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.cards}>
          {data.experience.map((job) => (
            <div key={job.title + job.company} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>{job.title}</div>
                  <div className={styles.cardSub}>{job.company} · {job.team}</div>
                </div>
                <span className={styles.dates}>{job.dates}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.cards}>
          {data.education.map((edu) => (
            <div key={edu.degree} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <div className={styles.cardTitle}>{edu.degree}</div>
                  <div className={styles.cardSub}>{edu.school}</div>
                </div>
                <span className={styles.dates}>{edu.dates}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
