import { Separator } from '@/components/ui/separator'
import ConferenceSection from '@/components/ConferenceSection'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProgrammesSection from '@/components/ProgrammesSection'
import { useTheme } from '@/hooks/use-theme'

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <Separator />
      <HeroSection isDark={isDark} />

      <Separator />
      <ProgrammesSection />

      <Separator />
      <ConferenceSection />

      <Separator />
      <FaqSection />
      <Separator />
      <Footer />
    </div>
  )
}
