import styles from './CV.module.css'

const data = {
  name: 'Olga Milovanova',
  location: 'Amsterdam, Netherlands',
  linkedin: 'linkedin.com/in/olgamilovanova',
  tagline:
    'Insurance supervision specialist with a background in financial econometrics. Focused on quantitative risk modelling, data-driven regulatory oversight, and the practical application of analytical skills in the financial sector.',
  skills: [
    { group: 'Languages', items: ['Python', 'Stata', 'R'] },
    { group: 'Tools', items: ['Microsoft Excel', 'Power BI', 'KPI Dashboards', 'Data Analysis'] },
    { group: 'Domain', items: ['Financial Econometrics', 'Insurance Supervision', 'Prudential Risk Modelling', 'Scrum'] },
  ],
  experience: [
    {
      title: 'Insurance Supervision Specialist',
      company: 'De Nederlandsche Bank',
      team: 'Expertisecentrum Kapitaal en Actuariaat (TV_ECKA)',
      dates: 'Sep 2025 – Present',
      bullets: [
        'Prudential supervision of the insurance sector within the capital and actuarial centre of expertise.',
      ],
    },
    {
      title: 'Master Thesis Intern',
      company: 'De Nederlandsche Bank',
      team: 'Expertisecentrum Kapitaal en Actuariaat (TV_ECKA)',
      dates: 'Apr 2025 – Aug 2025',
      bullets: [
        'Thesis: "Improving DNB Prudential Risk Models for Insurance Supervision"',
        'Grade: 8.0',
      ],
    },
    {
      title: 'Working Student — Insurance Supervision',
      company: 'De Nederlandsche Bank',
      team: 'Expertisecentrum Data, Algoritmes en Processen (TV_ECDAP)',
      dates: 'Jan 2025 – Aug 2025',
      bullets: [
        'Supported data-driven supervision initiatives within the data, algorithms, and processes centre of expertise.',
      ],
    },
    {
      title: 'Consultant / Junior Consultant',
      company: 'Solid Online',
      team: 'Hoofddorp, Netherlands',
      dates: 'Feb 2022 – Sep 2024',
      bullets: [
        'Progressed from intern to junior consultant to consultant over 2.5 years.',
        'Built KPI dashboards and carried out data analysis using Excel and Power BI.',
        'Provided technical support and client-facing consultancy in a hybrid setting.',
      ],
    },
    {
      title: 'Committee Roles',
      company: 'Study Association VSAE',
      team: 'University of Amsterdam',
      dates: 'Sep 2019 – Dec 2024',
      bullets: [
        'Chairwoman, ISP Committee (Dec 2023 – Dec 2024)',
        'Committee member, Econometric Game 2022 (Apr 2021 – Jun 2022)',
        'Party Committee member (Sep 2019 – Jun 2020)',
      ],
    },
  ],
  education: [
    {
      degree: "Master's degree — Financial Econometrics",
      school: 'University of Amsterdam',
      dates: 'Sep 2024 – Aug 2025',
    },
    {
      degree: "Bachelor's degree — Econometrics",
      school: 'University of Amsterdam',
      dates: '2019 – 2024',
    },
  ],
}

export default function CV() {
  return (
    <div className={styles.cv}>
      {/* Header */}
      <section className={styles.section}>
        <div>
          <h1 className={styles.name}>{data.name}</h1>
          <div className={styles.meta}>
            <span>{data.location}</span>
            <span className={styles.dot}>·</span>
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className={styles.metaLink}
            >
              {data.linkedin}
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
