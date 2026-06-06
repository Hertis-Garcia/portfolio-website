import Divider from './components/Divider'
import Hero from './components/Hero'
import Overview from './components/Overview'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'

const narrow = {
  maxWidth: 560,
  margin: '0 auto',
  width: '100%',
}

export default function App() {
  return (
    <div style={{ background: '#000000', minHeight: '100vh' }}>
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
