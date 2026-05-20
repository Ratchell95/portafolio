 
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
 
const GithubIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)
 
const DocIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
)
 
export default function Projects() {
  return (
    <section id="projects">
 
      <div className="section-header fade-in">
        <div className="section-eyebrow">PORTAFOLIO</div>
        <h2 className="section-title">Proyectos <span>Destacados</span></h2>
      </div>

      <div className="projects-grid">
 
<div className="project-card featured fade-in">
  <div className="project-number">PROYECTO 01 — DESTACADO</div>
  <div className="project-title">Movie Time – App Móvil de Reserva de Cines</div>

  <p className="project-desc">
    Sistema integral de gestión de ventas y reserva de butacas para la empresa Movie Time.
    Implementa lógica de concurrencia con{' '}
    <strong>bloqueo optimista en JPA</strong> para prevenir duplicidad de asientos en tiempo real.
    Incluye módulo de confitería, gestión de funciones y flujo completo de pago desde el móvil.
  </p>
 
  <div className="project-tags">
    {['Kotlin', 'Spring Boot', 'MySQL', 'Android Studio', 'Firebase', 'SQLite'].map(t => (
      <span className="project-tag" key={t}>{t}</span>
    ))}
  </div>
 
  <div className="project-footer">
    <div className="project-links">
      <a href="#" className="project-link-online"><GlobeIcon /><span>Ver Online</span></a>
      <a href="#" className="project-link-repo"><GithubIcon /><span>Repositorio</span></a>
      <a href="#" className="project-link-docs"><DocIcon /><span>Documentación</span></a>
    </div>
    <span className="project-status status-completed">Completado</span>
  </div>
</div>
 
        <div className="project-card fade-in">
          <div className="project-number">PROYECTO 02</div>
          <div className="project-title">Sistema de Gestión Académica</div>

          <p className="project-desc">
            Plataforma web para el seguimiento de notas, convalidaciones y carga académica de
            estudiantes de Ingeniería de Sistemas. Permite a docentes registrar evaluaciones y
            a alumnos consultar su historial en tiempo real.
          </p>

          <div className="project-tags">
            {['Java','React','PostgreSQL','Spring Boot'].map(t => (
              <span className="project-tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="project-footer">
            <div className="project-links">
              <a href="#" className="project-link-online"><GlobeIcon /><span>Ver Online</span></a>
              <a href="#" className="project-link-repo"><GithubIcon /><span>Repositorio</span></a>
            </div>
            <span className="project-status status-academic">Académico</span>
          </div>
        </div>
 
        <div className="project-card fade-in" style={{ borderStyle:'dashed', background:'transparent' }}>
          <div className="project-number">PROYECTO 03</div>
          <div className="project-title" style={{ color:'var(--muted)' }}>Próximamente...</div>

          <p className="project-desc" style={{ color:'var(--muted)' }}>
            En desarrollo. Siempre construyendo algo nuevo.
          </p>

          <div className="project-footer">
            <div className="project-links">
              <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'11px', color:'var(--muted)' }}>
                En progreso
              </span>
            </div>
         
            <span className="project-status" style={{ background:'#ffffff08', color:'var(--muted)', border:'1px solid var(--border)' }}>
              WIP
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
