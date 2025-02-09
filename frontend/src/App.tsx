import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

// Components
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Timeline from './components/Timeline'
import SkillChart from './components/SkillChart'
import ProjectGrid from './components/ProjectGrid'
import Achievements from './components/Achievements'
import BlogHub from './components/BlogHub'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import About from './components/About'
import LeadForm from './components/LeadForm'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <ThemeProvider>
      <div className="bg-black min-h-screen text-cyan-500 w-full">
        {isLoading ? (
          <div className="loading-screen w-full">
            <div className="cyber-spinner"></div>
            <p className="neon-text">Initializing Digital Interface...</p>
          </div>
        ) : (
          <>
            <Navbar />
            <main className="w-full">
              <HeroSection />
              <About />
              <Timeline />
              <SkillChart />
              <ProjectGrid />
              <Achievements />
              <BlogHub />
              <ContactForm />
            </main>
            <Footer />
            <ScrollToTop />
            <LeadForm />
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
