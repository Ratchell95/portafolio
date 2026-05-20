 
const skills = [
  {
    icon: 'devicon-java-plain',
    name: 'Backend',
    sub:  'Servidores & APIs REST',
    chips: [
      { icon: 'devicon-java-plain',                    label: 'Java',          level: 'Avanzado'   },
      { icon: 'devicon-spring-original',               label: 'Spring Boot',   level: 'Avanzado'   },
      { icon: 'devicon-hibernate-plain',               label: 'JPA/Hibernate', level: 'Intermedio' },
      { icon: 'devicon-nodejs-plain',                  label: 'Node.js',       level: 'Intermedio' }, 
    ],
  },
  {
    icon: 'devicon-react-original',
    name: 'Frontend',
    sub:  'Interfaces Web',
    chips: [
      { icon: 'devicon-react-original',   label: 'React',      level: 'Intermedio' },
      { icon: 'devicon-javascript-plain', label: 'JavaScript', level: 'Intermedio' },
      { icon: 'devicon-bootstrap-plain',  label: 'Bootstrap',  level: 'Avanzado'   },
      { icon: 'devicon-vitejs-plain',     label: 'Vite',       level: 'Intermedio' }, 
    ],
  },
  {
    icon: 'devicon-android-plain',
    name: 'Mobile',
    sub:  'Apps Nativas Android',
    chips: [
      { icon: 'devicon-kotlin-plain',                  label: 'Kotlin',        level: 'Avanzado'   },
      { icon: 'devicon-androidstudio-plain',           label: 'Android Studio',level: 'Avanzado'   },
    ],
  },
  {
    icon: 'devicon-mysql-original',
    name: 'Datos & Herramientas',
    sub:  'Persistencia y control de versiones',
    chips: [
      { icon: 'devicon-mysql-original',                label: 'MySQL',         level: 'Avanzado'   },
      { icon: 'devicon-microsoftsqlserver-plain',      label: 'SQL Server',    level: 'Intermedio' }, 
      { icon: 'devicon-git-plain',                     label: 'Git / GitHub',  level: 'Avanzado'   },
      { icon: 'devicon-postman-plain',                 label: 'Postman',       level: 'Avanzado'   },
    ],
  },
]
 
export default function Skills() {
  return (
    <section id="skills">
 
      <div className="section-header fade-in">
        <div className="section-eyebrow">HABILIDADES</div>
        <h2 className="section-title">Stack <span>Tecnológicos</span></h2>
      </div>
 
      <div className="skills-grid">
        {skills.map((s) => (
        
          <div className="skill-card fade-in" key={s.name}>

           
            <div className="skill-card-header">
              <div className="skill-card-icon">
                <i className={s.icon} />
              </div>
              <div>
                <div className="skill-card-name">{s.name}</div>
                <div className="skill-card-sub">{s.sub}</div>
              </div>
            </div>
 
            <div className="tech-chips">
              {s.chips.map((c) => (
                <div className="tech-chip" key={c.label}>
                  <i className={c.icon} /> {c.label}
          
                  <span className="chip-level">{c.level}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
