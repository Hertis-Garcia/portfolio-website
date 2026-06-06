import Divider from './components/Divider'
import Hero from './components/Hero'
import Overview from './components/Overview'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

const narrow = {
  maxWidth: 560,
  margin: '0 auto',
  width: '100%',
}

export default function App() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    active: false,
    visible: false,
  })

  useEffect(() => {
    const interactiveSelector = 'a, button, [role="button"]'

    function handlePointerMove(event) {
      const target = event.target
      const active = target instanceof Element && Boolean(target.closest(interactiveSelector))

      setCursor({
        x: event.clientX,
        y: event.clientY,
        active,
        visible: true,
      })
    }

    function handlePointerLeave() {
      setCursor((current) => ({ ...current, visible: false }))
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div
      className="site-shell"
      style={{ background: '#000000', minHeight: '100vh' }}
    >
      <div
        className={`cursor-orbit${cursor.active ? ' active' : ''}${
          cursor.visible ? ' visible' : ''
        }`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      <div
        className={`cursor-dot${cursor.visible ? ' visible' : ''}`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      <div style={narrow}>
        <Hero />
      </div>

      <Divider />

      <div style={narrow}>
        <Overview />
      </div>

      <Divider />

      <div style={narrow}>
        <TechStack />
      </div>

      <Divider />

      <div style={narrow}>
        <Projects />
      </div>

      <Divider />

      <div style={narrow}>
        <Footer />
      </div>
    </div>
  )
}
