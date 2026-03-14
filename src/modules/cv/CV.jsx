import styles from './CV.module.css'

const data = {
  name: 'Maqsood Ehsan',
  location: 'Utrecht, Netherlands',
  email: 'maqehsan@gmail.com',
  linkedin: 'linkedin.com/in/maqsoodehsan',
  tagline:
    'Software developer with a perfectionistic eye for detail, hard-working and always striving to achieve the best results. Independent working style, loves challenges, and strongly values reliability and accountability. Feels at home in diverse and multicultural environments. Always open to new learning opportunities and especially interested in the practical application of skills.',
  skills: [
    { group: 'Languages', items: ['Java', 'Python'] },
    {
      group: 'Technologies',
      items: ['MySQL', 'Postgres', 'Git', 'Azure', 'Docker', 'Kafka', 'Cloud Foundry', 'CI/CD', 'HSM', 'Spring Boot', 'React', 'TypeScript'],
    },
    {
      group: 'Other',
      items: ['Scrum', 'Stakeholder Engagement', 'Security', 'Data Structures & Algorithms'],
    },
  ],
  experience: [
    {
      title: 'Software Engineer',
      company: 'De Rabobank',
      team: 'FEC Tech · External Fraud',
      location: 'Utrecht, Netherlands',
      dates: 'Oct 2022 – Present',
      bullets: [
        'Built a reactive API gateway orchestrating fraud checks across upstream providers using Spring Cloud Gateway (WebFlux) with weighted/dynamic routing and rules-driven decisions.',
        'Implemented cross-cutting filters: correlation ID propagation, strict XML validation, and asynchronous event publishing to Axual Kafka using Avro schemas and envelope encryption (Fortanix/Azure-based DEK).',
        'Secured the edge with OAuth2/OIDC via Kong and TLS/mTLS; externalized configuration via Spring Cloud Config; added structured ECS logging and health/metrics endpoints.',
        'Built a Spring Boot REST service for banking compliance to orchestrate incident feeds with scheduled generation/retrieval, archiving/cleanup, and XML validation against XSDs.',
        'Persisted data to Azure SQL Server using Spring Data JPA/Hibernate and added observability via Splunk.',
        'Implemented Kafka producers/consumers on Axual with Schema Registry (Avro) and mTLS; automated build/deploy with Maven, Azure DevOps, and Cloud Foundry.',
      ],
    },
    {
      title: 'Software Engineer — Young Engineering Professional Program',
      company: 'De Rabobank',
      team: 'FEC Tech · External Fraud',
      dates: 'Oct 2022 – Apr 2024',
      bullets: [
        'Engineered end-to-end full-stack applications using Figma for design, React TypeScript for front end, and Java Spring Boot for back end.',
        'Worked on various stakeholder projects including web data analytics and a carbon emissions credit marketplace.',
        'Attended workshops on testing, security, and personal development.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Sc. Computer Science',
      school: 'University of Amsterdam',
      dates: 'Aug 2018 – Aug 2022',
    },
    {
      degree: 'Microsoft Certified: Azure AI Fundamentals',
      school: '873 / 1000',
      dates: 'Nov 2025',
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
            <a href={`mailto:${data.email}`} className={styles.metaLink}>{data.email}</a>
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
            <div key={job.title} className={styles.card}>
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
        <h2 className={styles.heading}>Education & Certifications</h2>
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
