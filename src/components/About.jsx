 
export default function About() {
  return (
    <section id="about">
      <div className="about-grid">

        {/* ── Columna izquierda: texto e highlights ─────── */}
        <div className="about-text fade-in">
          <div className="section-eyebrow">PERFIL</div>
          <h2 className="section-title" style={{ marginBottom:'28px' }}>
            Sobre <span>Mí</span>
          </h2>
          {/* Párrafos de presentación */}
          <p>
            Soy <strong>Marjhori Ratchell Huaman Cuya</strong>, estudiante de Desarrollo de sistemas
            en IDAT de ultimo ciclo.
            Me apasiona construir software que resuelva problemas
            reales: desde APIs robustas en Spring Boot hasta apps nativas en Android con Kotlin.
          </p>
          <p>
            Mi enfoque es siempre <strong>entender el problema antes de escribir código</strong>.
            Trabajo con metodologías ágiles (Scrum), versionamiento en Git y documentación desde
            el inicio. Para mí, un proyecto bien terminado es uno que otros puedan entender,
            mantener y escalar.
          </p>
          <p>
            Busco activamente <strong>oportunidades de prácticas</strong> donde pueda aportar
            desde el primer día y seguir creciendo en entornos de desarrollo profesional.
          </p>

          {/* ── Tarjetas de highlights ─────────────────── */}
          <div className="hl-grid">

            {/* Tarjeta 1: Formación */}
            <div className="hl-card card-blue">
              <div className="hl-icon">
                {/* Icono de capas (representa educación/aprendizaje) */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                     strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <path d="M12 3L2 8l10 5 10-5-10-5z"/>
                  <path d="M2 13l10 5 10-5"/>
                  <path d="M2 18l10 5 10-5"/>
                </svg>
              </div>
              <div className="hl-title">Formación</div>
              <div className="hl-sub">Ingeniería de Sistemas<br/>IDAT · 6to ciclo</div>
            </div>

            {/* Tarjeta 2: Especialidad */}
            <div className="hl-card card-purple">
              <div className="hl-icon">
                {/* Icono de código (corchetes angulares) */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                     strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="hl-title">Especialidad</div>
              <div className="hl-sub">Backend Java<br/>Android Kotlin · Full Stack</div>
            </div>

          
            <div className="hl-card card-green">
              <div className="hl-icon">
                
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                     strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <div className="hl-title">Buscando</div>
              <div className="hl-sub">Prácticas profesionales<br/>Proyectos colaborativos</div>
            </div>

          </div>
        </div>

         
        <div className="about-sidebar fade-in">

        
          <div className="data-block">
            <div className="data-block-label">DATOS TECNICOS</div>
            <div className="data-rows">
              
                   {[
                    ['Lenguaje principal', 'Java',                    true  ],
                    ['Framework',          'Spring Boot',             false ],
                    ['Mobile',             'Kotlin + Android',        false ],
                    ['Runtime',            'Node.js',                 false ],
                    ['Build Tool',         'Vite',                    false ],
                    ['DB preferida',       'MySQL · SQL Server',      false ],
                    ['Metodología',        'Scrum · Git Flow',        false ],
                    ['Idiomas',            'Español · Inglés básico', false ],
                  ].map(([k, v, accent]) => (
                    <div className="data-row" key={k}>
                      <span className="data-key">{k}</span>
                      <span className={`data-val${accent ? ' accent' : ''}`}>{v}</span>
                    </div>
                  ))}
            </div>
          </div>

         
          <div className="data-block">
            <div className="data-block-label">DISPONIBILIDAD</div>
            <div className="data-rows">
              {[
                ['Estado',    'Disponible ✓',    true  ],
                ['Modalidad', 'Remoto · Híbrido', false ],
                ['Ubicación', 'Lima, Perú',        false ],
              ].map(([k, v, accent]) => (
                <div className="data-row" key={k}>
                  <span className="data-key">{k}</span>
                  <span className={`data-val${accent ? ' accent' : ''}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
