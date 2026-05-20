 
import { useEffect, useRef } from 'react'

 
const dockItems = [
  { icon: 'devicon-java-plain',          label: 'Java'           },
  { icon: 'devicon-spring-original',     label: 'Spring Boot'    },
  { icon: 'devicon-kotlin-plain',        label: 'Kotlin'         },
  { icon: 'devicon-androidstudio-plain', label: 'Android Studio' },
  { icon: 'devicon-react-original',      label: 'React'          },
  { icon: 'devicon-nodejs-plain',         label: 'Node.js',      },
  { icon: 'devicon-vitejs-plain' ,        label: 'Vite',          },
  { icon: 'devicon-microsoftsqlserver-plain',  label:'SQL Server' },
  { icon: 'devicon-javascript-plain',    label: 'JavaScript'     },
  { icon: 'devicon-mysql-original',      label: 'MySQL'          },
  { icon: 'devicon-github-original',     label: 'GitHub'         },
  { icon: 'devicon-postman-plain',       label: 'Postman'        },
  { icon: 'devicon-bootstrap-plain',     label: 'Bootstrap'      },
]
 
const BASE  = 52    
const MAX   = 88    
const RANGE = 130  

export default function Dock() {
 
  const dockRef = useRef(null)

  useEffect(() => {
    const dock = dockRef.current
    if (!dock) return
 
    const getIcons = () => dock.querySelectorAll('.dock-item-icon')
 
    const resetIcons = () => {
      getIcons().forEach(icon => {
        icon.style.width        = BASE + 'px'
        icon.style.height       = BASE + 'px'
        icon.style.fontSize     = '28px'
        icon.style.borderRadius = '12px'
      })
    }

    const onMouseMove = (e) => {
      const dockRect = dock.getBoundingClientRect()
 
      const nearDock = e.clientY > dockRect.top - RANGE
                    && e.clientY < dockRect.bottom + 20
                    && e.clientX > dockRect.left  - 40
                    && e.clientX < dockRect.right + 40

      dock.querySelectorAll('.dock-item').forEach(item => {
        const icon = item.querySelector('.dock-item-icon')

       
        if (!nearDock) { resetIcons(); return }

 
        const rect   = item.getBoundingClientRect()
        const center = rect.left + rect.width / 2
 
        const dist = Math.abs(e.clientX - center)
 
        const ratio = Math.max(0, 1 - dist / RANGE)
 
        const smooth = (Math.cos(Math.PI * (1 - ratio)) + 1) / 2

 
        const size = BASE + (MAX - BASE) * smooth
 
        icon.style.width        = size + 'px'
        icon.style.height       = size + 'px'
        icon.style.fontSize     = (size * 0.52) + 'px'        
        icon.style.borderRadius = Math.round(size * 0.22) + 'px' 
      })
    }
 
    document.addEventListener('mousemove', onMouseMove)
    dock.addEventListener('mouseleave', resetIcons) 
 
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      dock.removeEventListener('mouseleave', resetIcons)
    }
  }, []) 

  return (
    <div id="dock-section">
 
      <div className="dock-label">TECNOLOGIAS HE APRENDIDO</div>
 
      <div className="dock-wrapper" id="dock" ref={dockRef}>
        {dockItems.map((item) => (
    
          <div className="dock-item" key={item.label} data-label={item.label}>

           
            <div className="dock-item-icon">
              <i className={item.icon} />
            </div>
 
            <div className="dock-tooltip">{item.label}</div>
          </div>
        ))}
      </div>
 
      <div className="dock-shelf" />
    </div>
  )
}
