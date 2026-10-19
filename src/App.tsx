import { LeadFlowProvider } from './components/ui/LeadFlowProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Quiz from './components/Quiz'
import Advantages from './components/Advantages'
import Process from './components/Process'
import Stats from './components/Stats'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <LeadFlowProvider>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Quiz />
        <Advantages />
        <Process />
        <Stats />
        <Reviews />
      </main>
      <Footer />
    </LeadFlowProvider>
  )
}