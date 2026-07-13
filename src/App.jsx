import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Audiences from './components/Audiences'
import DemoVideo from './components/DemoVideo'
import TwoWays from './components/TwoWays'
import Stats from './components/Stats'
import Tech from './components/Tech'
import Achievements from './components/Achievements'
import UzCombinator from './components/UzCombinator'
import Team from './components/Team'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Audiences />
        <DemoVideo />
        <TwoWays />
        <Stats />
        <Tech />
        <Achievements />
        <UzCombinator />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
