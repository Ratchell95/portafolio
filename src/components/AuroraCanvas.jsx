 
import { useEffect, useRef } from 'react'

export default function AuroraCanvas() {
  // Referencia al elemento <canvas> del DOM
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d') 

    
    let W, H            // ancho y alto actuales
    let stars      = [] // arreglo de objetos estrella
    let particles  = [] // arreglo de objetos partícula
    let rafId           // id del requestAnimationFrame (para cancelarlo al limpiar)

 
    const nebulaeDark = [
      { cx:0.15, cy:0.25, rx:0.40, ry:0.35, r:0,   g:229, b:255, a:0.055, sx:0.00007, sy:0.00005 },
      { cx:0.75, cy:0.55, rx:0.38, ry:0.30, r:124, g:58,  b:237, a:0.045, sx:0.00005, sy:0.00008 },
      { cx:0.50, cy:0.80, rx:0.50, ry:0.28, r:255, g:107, b:53,  a:0.030, sx:0.00006, sy:0.00004 },
      { cx:0.90, cy:0.20, rx:0.30, ry:0.25, r:0,   g:229, b:255, a:0.035, sx:0.00009, sy:0.00006 },
      { cx:0.30, cy:0.70, rx:0.35, ry:0.32, r:80,  g:40,  b:200, a:0.040, sx:0.00004, sy:0.00007 },
    ]
    const nebulaeLight = [
      { cx:0.15, cy:0.25, rx:0.45, ry:0.40, r:0,   g:119, b:204, a:0.07,  sx:0.00007, sy:0.00005 },
      { cx:0.80, cy:0.50, rx:0.42, ry:0.35, r:100, g:40,  b:200, a:0.06,  sx:0.00005, sy:0.00008 },
      { cx:0.50, cy:0.85, rx:0.55, ry:0.30, r:220, g:80,  b:20,  a:0.04,  sx:0.00006, sy:0.00004 },
      { cx:0.85, cy:0.15, rx:0.35, ry:0.28, r:0,   g:150, b:220, a:0.05,  sx:0.00009, sy:0.00006 },
    ]
 
    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      initStars()  
    }

 
    function initStars() {
      stars = []
      const count = Math.floor((W * H) / 6000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,          // posición X aleatoria
          y: Math.random() * H,          // posición Y aleatoria
          r: Math.random() * 1.1 + 0.2,  // radio entre 0.2 y 1.3 px
          alpha: Math.random() * 0.5 + 0.1, // opacidad base
          flicker: Math.random() * 0.004 + 0.001, // velocidad de parpadeo
          phase: Math.random() * Math.PI * 2,      // fase inicial (aleatoria)
        })
      }
    }
 
    function initParticles() {
      particles = []
      const count = Math.min(60, Math.floor(W / 22))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.8 + 0.6,           // radio 0.6–2.4 px
          vx: (Math.random() - 0.5) * 0.25,        // velocidad horizontal (leve)
          vy: -(Math.random() * 0.3 + 0.05),        // velocidad vertical (siempre hacia arriba)
          alpha: Math.random() * 0.45 + 0.05,
          life: Math.random(),                       // ciclo de vida 0→1
          // Colores distintos para cada tema
          colorDark:  [[0,229,255],[124,58,237],[255,107,53],[80,200,240]][Math.floor(Math.random()*4)],
          colorLight: [[0,119,204],[100,40,200],[220,80,20],[0,150,200]][Math.floor(Math.random()*4)],
        })
      }
    }
 
    function drawStars(ts) {
 
      if (document.body.classList.contains('light')) return

      for (const s of stars) {
 
        const a = s.alpha * (0.6 + 0.4 * Math.sin(ts * s.flicker + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,220,255,${a})`
        ctx.fill()
      }
    }
 
    function drawNebula(nb, ts) {
    
      const x  = W * (nb.cx + Math.sin(ts * nb.sx * 60000) * 0.06)
      const y  = H * (nb.cy + Math.cos(ts * nb.sy * 50000) * 0.05)
      const rx = W * nb.rx  // radio horizontal en píxeles
      const ry = H * nb.ry  // radio vertical en píxeles
 
      const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry))
      grad.addColorStop(0,   `rgba(${nb.r},${nb.g},${nb.b},${nb.a})`)       // centro: opaco
      grad.addColorStop(0.5, `rgba(${nb.r},${nb.g},${nb.b},${nb.a * 0.4})`) // medio
      grad.addColorStop(1,   `rgba(${nb.r},${nb.g},${nb.b},0)`)              // borde: transparente
 
      ctx.save()
      ctx.scale(1, ry / rx)           // comprimir verticalmente
      ctx.beginPath()
      ctx.arc(x, y * (rx / ry), rx, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
      ctx.restore()           
    }
 
    function updateParticles() {
      const isLight = document.body.classList.contains('light')

      for (const p of particles) {
 
        p.x += p.vx
        p.y += p.vy
        p.life += 0.002  
 
        if (p.life > 1) {
          p.life = 0
          p.x  = Math.random() * W
          p.y  = H + 10  // empezar justo debajo del canvas
          p.vy = -(Math.random() * 0.3 + 0.05)
          p.vx = (Math.random() - 0.5) * 0.25
        }

    
        const fade = p.life < 0.1
          ? p.life / 0.1
          : p.life > 0.85
            ? (1 - p.life) / 0.15
            : 1

        const [r, g, b] = isLight ? p.colorLight : p.colorDark
 
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * fade})`
        ctx.fill()
 
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
        glow.addColorStop(0, `rgba(${r},${g},${b},${0.06 * fade})`)
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
      }
    }
 
    function drawConnections() {
      const isLight  = document.body.classList.contains('light')
      const MAX_DIST = 120   
 
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)

          if (dist < MAX_DIST) {
 
            const a = (1 - dist / MAX_DIST) * (isLight ? 0.09 : 0.06)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = isLight ? `rgba(0,119,204,${a})` : `rgba(0,229,255,${a})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }
    }
 
    function frame(ts) {
      // Limpiar el canvas antes de cada fotograma
      ctx.clearRect(0, 0, W, H)

      const isLight = document.body.classList.contains('light')
      const nebulae = isLight ? nebulaeLight : nebulaeDark

      // Dibujar capas en orden (de atrás hacia adelante)
      drawStars(ts)
      nebulae.forEach(nb => drawNebula(nb, ts))
      drawConnections()
      updateParticles()
 
      rafId = requestAnimationFrame(frame)
    }
 
    resize()      
    initParticles()  

   
    window.addEventListener('resize', () => { resize(); initParticles() })

 
    rafId = requestAnimationFrame(frame)

 
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', () => { resize(); initParticles() })
    }
  }, [])  
 
  return <canvas id="aurora-canvas" ref={canvasRef} />
}
