 
import { useEffect, useRef } from 'react'

export default function Cursor() {
 
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    
    const move = (e) => {
    
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
 
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top  = e.clientY + 'px'
      }
    }

 
    document.addEventListener('mousemove', move)

 
    return () => document.removeEventListener('mousemove', move)
  }, [])  

  return (
    <>
      
      <div className="cursor" ref={cursorRef} />
 
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
