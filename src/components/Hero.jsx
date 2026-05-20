import fotoMarjhori from '../assets/marjhori.png'
 
export default function Hero() {
  return (
    <section id="hero">
 
      <div className="hero-bg-lines" />

    
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

     
      <div className="hero-left">
 
        <h1 className="hero-title">
          Full Stack<br />
          <span className="title-dim">&amp; Mobile</span><br />
          <span className="title-accent">Developer.</span>
        </h1>

   
        <p className="hero-desc">
          Estudiante de Ingeniería de Sistemas en UTP,egresada en desarrollo de software-IDAT especializada en arquitecturas backend
          con Java y Spring Boot, apps nativas en Android y flujos full-stack.
        
        </p>
 
        <div className="hero-cta">
         
          <a href="#projects" className="btn-primary">
            <span>Ver Proyectos</span>
          </a>

          
          <a href="https://drive.google.com/file/d/1gV5wPU2mzJAVlVrpOLFFkq_U16b5hUGo/view?usp=sharing" download className="btn-cv"
            target="_blank" rel="noreferrer" className="btn-cv">
            <svg viewBox="0 0 24 24">
              <path d="M12 16l-4-4h2.5V4h3v8H16l-4 4zm-7 4v-2h14v2H5z"/>
            </svg>
            <span>Descargar CV</span>
          </a>

        
          <a href="#about" className="btn-ghost">
            <span>Sobre mí</span>
          </a>
        </div>
      </div>

 
      <div className="hero-right">
 
        <div className="photo-card">
          <div className="photo-wrapper">
            
            <div className="photo-ring" />
            <div className="photo-ring-inner" />
 
           <div className="photo-img" id="photoDisplay">
           <img 
                 src={fotoMarjhori}
                 alt="Marjhori Ratchell"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                 />
              </div>        
              </div>          
 
          <div className="photo-name-tag">
            <strong>Marjhori Ratchell</strong>
            Full Stack &amp; Mobile Dev
          </div>

        </div>
 
        <div className="info-card">
          <div className="info-card-value">
            <span>Nombre: </span>Marjhori Ratchell H.C.<br/>
            <span>Rol: </span>Full Stack + Mobile Dev<br/>
            <span>Enfoque: </span>Java · Kotlin · React
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-label">Encuentrame en:</div>
          <div className="social-row">

            <a href="https://github.com/Ratchell95?tab=overview&from=2026-05-01&to=2026-05-14" target="_blank" rel="noreferrer" className="social-btn">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/ratchell-huaman-cuya-27522b270/" target="_blank" rel="noreferrer" className="social-btn">
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}
