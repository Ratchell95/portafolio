 
import { useTheme }  from './hooks/useTheme'    
import { useFadeIn } from './hooks/useFadeIn'   

// Componentes visuales
import AuroraCanvas   from './components/AuroraCanvas'     
import Cursor         from './components/Cursor'          
import Navbar         from './components/Navbar'           
import Hero           from './components/Hero'            
import Skills         from './components/Skills'           
import Dock           from './components/Dock'             
import Projects       from './components/Projects'        
import About          from './components/About'            
import { Contact, Footer } from './components/ContactFooter'  

export default function App() {
  
  const { theme, setTheme } = useTheme()
 
  useFadeIn()

  return (
    <>
 
      <AuroraCanvas />
 
      <Cursor />
 
      <Navbar theme={theme} setTheme={setTheme} />
 
      <Hero />
      <Skills />
      <Dock />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
